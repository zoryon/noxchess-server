import { Server, Socket } from "socket.io";
import { prisma } from "@/lib/prisma.js";
import { buildHandlerContext, getDangerousSquare, getPhase } from "./engine/utils.js";
import { applyMove, applyPromotion, evaluateEnd, isInCheck } from "./engine/validator.js";
import { logMoveTx } from "@/logic/engine/tx-helpers.js";
import { applyAbility } from "./engine/abilities.js";

export async function fetchCurrentGameStateById(matchId: number) {
    return await prisma.match.findUnique({
        where: { id: matchId },
        include: {
            match_player: true,
            match_piece: true
        }
    });
}

export async function deployGameHandler(io: Server, socket: Socket, matchId: number) {
    const room = `match:${matchId}`;
    // Ensure this socket joins the match room
    try { socket.join(room); } catch { }
    // In-memory disconnect timers per (matchId:userId)
    // Note: This resets on server restart; good enough for 1-minute grace.
    const keyFor = (u: number) => `${matchId}:${u}`;
    const globalAny: any = global as any;
    if (!globalAny.__lnm_disconnectTimers) globalAny.__lnm_disconnectTimers = new Map<string, NodeJS.Timeout>();
    const timers: Map<string, NodeJS.Timeout> = globalAny.__lnm_disconnectTimers;

    // Per-turn idle timers (one per match) and idle counters per player
    if (!globalAny.__lnm_turnTimers) globalAny.__lnm_turnTimers = new Map<number, NodeJS.Timeout>();
    if (!globalAny.__lnm_idleCounts) globalAny.__lnm_idleCounts = new Map<string, number>();
    const turnTimers: Map<number, NodeJS.Timeout> = globalAny.__lnm_turnTimers;
    const idleCounts: Map<string, number> = globalAny.__lnm_idleCounts;

    // Schedule/refresh a 3-minute idle timer for the current player to move. If they do nothing, auto-idle.
    async function scheduleTurnTimer(matchObj?: any) {
        const match = matchObj ?? (await fetchCurrentGameStateById(matchId));
        if (!match) return;
        if (match.status === "FINISHED") {
            const prev = turnTimers.get(matchId);
            if (prev) { clearTimeout(prev); turnTimers.delete(matchId); }
            return;
        }
        const expectedTurn = match.turn;
        const currentColor = expectedTurn % 2 === 1 ? "WHITE" : "BLACK";
        const currentPlayer = match.match_player.find((p: any) => p.color === currentColor);
        if (!currentPlayer) return;

        // Clear existing timer for this match
        const existing = turnTimers.get(matchId);
        if (existing) clearTimeout(existing);

        const t = setTimeout(async () => {
            try {
                const latest = await fetchCurrentGameStateById(matchId);
                if (!latest || latest.status === "FINISHED") return;
                // If turn changed since scheduling, do nothing
                if (latest.turn !== expectedTurn) return;

                const nowColor = latest.turn % 2 === 1 ? "WHITE" : "BLACK";
                const nowPlayer = latest.match_player.find((p: any) => p.color === nowColor);
                if (!nowPlayer) return;

                const countKey = keyFor(nowPlayer.userId ?? -1);
                const prevCount = idleCounts.get(countKey) ?? 0;
                const nextCount = prevCount + 1;

                if (nextCount >= 2) {
                    // Forfeit by idle
                    const winner = latest.match_player.find((p: any) => p.userId !== nowPlayer.userId);
                    await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                    io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "idle" });
                    idleCounts.set(countKey, nextCount);
                    return;
                }

                // Auto-idle: end the turn without DE gain and log an "IDLE" move
                const ctx = buildHandlerContext(latest);
                await prisma.$transaction(async (tx) => {
                    // Clear any pending extra-step flags tied to this exact turn for the idling player
                    const pieces = await tx.match_piece.findMany({ where: { matchId, playerId: nowPlayer.userId, captured: 0 } });
                    for (const p of pieces) {
                        const st: any = p.status ?? {};
                        let changed = false;
                        if (st.unstablePendingTurn === expectedTurn) { delete st.unstablePendingTurn; changed = true; }
                        if (st.gatewayPendingTurn === expectedTurn) { delete st.gatewayPendingTurn; changed = true; }
                        if (changed) {
                            await tx.match_piece.update({ where: { id: p.id }, data: { status: st as any } });
                        }
                    }
                    await tx.match.update({ where: { id: matchId }, data: { turn: { increment: 1 } } });
                    await logMoveTx(tx, { ...ctx, me: nowPlayer } as any, { fromX: -1, fromY: -1, toX: -1, toY: -1, pieceType: "IDLE", specialAbilityUsed: 0, moveType: "MEDITATE" });
                });
                idleCounts.set(countKey, nextCount);
                io.to(room).emit("turn:idled", { userId: nowPlayer.userId, count: nextCount });
                await emitState();
            } catch (e) {
                // swallow
            } finally {
                turnTimers.delete(matchId);
            }
        }, 180_000);
        turnTimers.set(matchId, t);
    }

    async function computeClocks(match: any) {
        // 10 minutes per side in ms
        const total = 10 * 60 * 1000;
        const moves = await prisma.match_move.findMany({ where: { matchId }, orderBy: { createdAt: "asc" } });
        const createdAt = (match.createdAt ? new Date(match.createdAt) : new Date());
        const colorOf = (userId: number | null | undefined) => match.match_player.find((p: any) => p.userId === userId)?.color;

        let whiteUsed = 0; let blackUsed = 0;
        // Helper to add duration to a color
        const addTo = (color: string | undefined, ms: number) => {
            if (!color) return;
            if (color === "WHITE") whiteUsed += ms; else if (color === "BLACK") blackUsed += ms;
        };

        // Build turn segments: [startTime, moverColor]
        let lastTime = createdAt.getTime();
        let lastMoverColor: string | undefined = undefined;
        for (const mv of moves) {
            const mvTime = (mv.createdAt ? new Date(mv.createdAt) : new Date()).getTime();
            // The player whose time was running is the color to move before this move, which is the opposite of lastMoverColor
            const runningColor = lastMoverColor ? (lastMoverColor === "WHITE" ? "BLACK" : "WHITE") : "WHITE"; // White starts
            addTo(runningColor, Math.max(0, mvTime - lastTime));
            lastTime = mvTime;
            lastMoverColor = colorOf(mv.playerId);
        }

        // For current running color (no move yet), accumulate from lastTime to now
        const now = Date.now();
        const runningColor = lastMoverColor ? (lastMoverColor === "WHITE" ? "BLACK" : "WHITE") : "WHITE";
        addTo(runningColor, Math.max(0, now - lastTime));

        return { whiteMs: Math.max(0, total - whiteUsed), blackMs: Math.max(0, total - blackUsed) };
    }

    async function emitState() {
        const match = await fetchCurrentGameStateById(matchId);
        if (!match) return;
        const phase = getPhase(match.turn);
        const clocks = await computeClocks(match);
        const danger = phase === "UNSTABLE" ? getDangerousSquare(match.id, match.turn) : null;
        io.to(room).emit("match:update", { match, phase, clocks, dangerousSquare: danger });
        // (Re)schedule the 3-minute per-turn idle timer for the current player
        await scheduleTurnTimer(match);
    }

    // Initial state sync for the connecting socket
    await emitState();

    // Clear any pending disconnect-forfeit timer for this user
    try {
        const userId: number = socket.data.user.userId;
        const k = keyFor(userId);
        const t = timers.get(k);
        if (t) {
            clearTimeout(t);
            timers.delete(k);
        }
    } catch { }

    // Attempt a standard move
    socket.on("move:attempt", async (payload, ack?: (res: any) => void) => {
        try {
            const match = await fetchCurrentGameStateById(matchId);
            if (!match) throw new Error("match_not_found");

            // Time forfeit check before action
            const clocks = await computeClocks(match);
            const currentColor = match.turn % 2 === 1 ? "WHITE" : "BLACK";
            const timeLeft = currentColor === "WHITE" ? clocks.whiteMs : clocks.blackMs;
            if (timeLeft <= 0) {
                const winner = match.match_player.find((p: any) => p.color !== currentColor);
                await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "time" });
                ack?.({ ok: false, error: "time_forfeit" });
                return;
            }

            const ctx = buildHandlerContext(match);
            const res = await applyMove(ctx, payload, socket.data.user.userId);

            if (!res.ok) {
                ack?.({ ok: false, error: res.error, details: res.details });
                return;
            }

            io.to(room).emit("move:applied", res.broadcast);
            // Evaluate end conditions after move (turn incremented in DB)
            const updated = await fetchCurrentGameStateById(matchId);
            if (updated) {
                const ctx2 = buildHandlerContext(updated);
                const end = evaluateEnd(ctx2);
                if (end.outcome) {
                    if (end.outcome === "checkmate") {
                        const winnerColor = end.winnerColor;
                        const winner = updated.match_player.find((p: any) => p.color === winnerColor);
                        await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                        io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "checkmate" });
                    } else if (end.outcome === "stalemate") {
                        await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: null } });
                        io.to(room).emit("match:finished", { matchId, winnerId: null, reason: "stalemate" });
                    }
                }
            }
            await emitState();
            ack?.({ ok: true });
        } catch (e: any) {
            ack?.({ ok: false, error: e.message || "unknown_error" });
        }
    });

    // Use an active ability
    socket.on("ability:use", async (payload, ack?: (res: any) => void) => {
        try {
            const match = await fetchCurrentGameStateById(matchId);
            if (!match) throw new Error("match_not_found");

            // Time forfeit check before action
            const clocks = await computeClocks(match);
            const currentColor = match.turn % 2 === 1 ? "WHITE" : "BLACK";
            const timeLeft = currentColor === "WHITE" ? clocks.whiteMs : clocks.blackMs;
            if (timeLeft <= 0) {
                const winner = match.match_player.find((p: any) => p.color !== currentColor);
                await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "time" });
                ack?.({ ok: false, error: "time_forfeit" });
                return;
            }
            const ctx = buildHandlerContext(match);
            const res = await applyAbility(ctx, payload, socket.data.user.userId);
            if (!res.ok) {
                ack?.({ ok: false, error: res.error, details: res.details });
                return;
            }
            io.to(room).emit("ability:applied", res.broadcast);
            // If ability ended the turn, evaluate end conditions
            const updated = await fetchCurrentGameStateById(matchId);
            if (updated) {
                const turnChanged = updated.turn !== match.turn;
                if (turnChanged) {
                    const ctx2 = buildHandlerContext(updated);
                    const end = evaluateEnd(ctx2);
                    if (end.outcome) {
                        if (end.outcome === "checkmate") {
                            const winnerColor = end.winnerColor;
                            const winner = updated.match_player.find((p: any) => p.color === winnerColor);
                            await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                            io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "checkmate" });
                        } else if (end.outcome === "stalemate") {
                            await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: null } });
                            io.to(room).emit("match:finished", { matchId, winnerId: null, reason: "stalemate" });
                        }
                    }
                }
            }
            await emitState();
            ack?.({ ok: true });
        } catch (e: any) {
            ack?.({ ok: false, error: e.message || "unknown_error" });
        }
    });

    // Mental Echo: declare intended move for a specific piece for this turn
    socket.on("echo:declare", async (payload: { pieceId: number; from: { x: number; y: number }; to: { x: number; y: number } }, ack?: (res: any) => void) => {
        try {
            const match = await fetchCurrentGameStateById(matchId);
            if (!match) throw new Error("match_not_found");
            const ctx = buildHandlerContext(match);
            const piece = ctx.match.match_piece.find(p => p.id === payload.pieceId);
            if (!piece) throw new Error("piece_not_found");
            if (piece.playerId !== socket.data.user.userId) throw new Error("not_your_piece");
            const st: any = piece.status ?? {};
            const echoActive = (st.echoPendingFromTurn != null && ctx.match.turn >= st.echoPendingFromTurn) && (st.echoPendingTurns ?? 0) > 0;
            if (!echoActive) throw new Error("no_echo_pending");
            // Store declaration for this turn; do not validate legality here (validator will)
            const newSt = { ...st, echoDeclaredForTurn: ctx.match.turn, echoDeclFromX: payload.from.x, echoDeclFromY: payload.from.y, echoDeclToX: payload.to.x, echoDeclToY: payload.to.y, echoPendingTurns: Math.max(0, (st.echoPendingTurns ?? 1) - 1) };
            await prisma.match_piece.update({ where: { id: piece.id }, data: { status: newSt as any } });
            io.to(room).emit("echo:declared", { pieceId: piece.id, turn: ctx.match.turn, from: payload.from, to: payload.to });
            ack?.({ ok: true });
        } catch (e: any) {
            ack?.({ ok: false, error: e.message || "unknown_error" });
        }
    });

    // Meditate action (+8 DE, not allowed in check). Ends the turn immediately with no moves.
    socket.on("turn:meditate", async (_payload, ack?: (res: any) => void) => {
        try {
            const match = await fetchCurrentGameStateById(matchId);
            if (!match) throw new Error("match_not_found");

            // Guard: correct player's turn
            const userId: number = socket.data.user.userId;
            const currentColor = match.turn % 2 === 1 ? "WHITE" : "BLACK";
            const player = match.match_player.find(p => p.userId === userId);
            if (!player) throw new Error("not_in_match");
            if (player.color !== currentColor) throw new Error("not_your_turn");

            const ctx = buildHandlerContext(match);
            const inCheck = isInCheck(ctx, currentColor as any);
            if (inCheck) throw new Error("cannot_meditate_in_check");

            await prisma.$transaction(async (tx) => {
                await tx.match_player.update({
                    where: { id: player.id },
                    data: { dreamEnergy: { increment: 8 } }
                });
                await tx.match.update({
                    where: { id: matchId },
                    data: { turn: { increment: 1 } }
                });
                await logMoveTx(tx, { match, me: player } as any, { fromX: -1, fromY: -1, toX: -1, toY: -1, pieceType: "MEDITATE", specialAbilityUsed: 0, moveType: "MEDITATE" });
            });

            io.to(room).emit("turn:meditated", { userId: player.userId });
            // Evaluate end conditions after meditation (rare but if no legal moves for opponent -> stalemate/checkmate)
            const updated = await fetchCurrentGameStateById(matchId);
            if (updated) {
                const ctx2 = buildHandlerContext(updated);
                const end = evaluateEnd(ctx2);
                if (end.outcome) {
                    if (end.outcome === "checkmate") {
                        const winner = updated.match_player.find((p: any) => p.color === (updated.turn % 2 === 1 ? "WHITE" : "BLACK"));
                        await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                        io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "checkmate" });
                    } else if (end.outcome === "stalemate") {
                        await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: null } });
                        io.to(room).emit("match:finished", { matchId, winnerId: null, reason: "stalemate" });
                    }
                }
            }
            await emitState();
            ack?.({ ok: true });
        } catch (e: any) {
            ack?.({ ok: false, error: e.message || "unknown_error" });
        }
    });

    // Resolve Corrupted Promotion for a pending Larva
    socket.on("promotion:resolve", async (payload: { larvaId: number; choice: any }, ack?: (res: any) => void) => {
        try {
            const match = await fetchCurrentGameStateById(matchId);
            if (!match) throw new Error("match_not_found");
            const ctx = buildHandlerContext(match);
            const res = await applyPromotion(ctx, payload.larvaId, payload.choice, socket.data.user.userId);
            if (!res.ok) {
                ack?.({ ok: false, error: res.error, details: res.details });
                return;
            }
            io.to(room).emit("promotion:applied", res.broadcast);
            await emitState();
            ack?.({ ok: true });
        } catch (e: any) {
            ack?.({ ok: false, error: e.message || "unknown_error" });
        }
    });

    socket.on("match:state:request", async (_payload, ack?: (res: any) => void) => {
        const match = await fetchCurrentGameStateById(matchId);
        const phase = match ? getPhase(match.turn) : null;
        const clocks = match ? await computeClocks(match) : null;
        const danger = match && phase === "UNSTABLE" ? getDangerousSquare(match.id, match.turn) : null;
        ack?.({ ok: true, match, phase, clocks, dangerousSquare: danger });
    });

    socket.on("match:resign", async (_payload, ack?: (res: any) => void) => {
        try {
            const match = await fetchCurrentGameStateById(matchId);
            if (!match) throw new Error("match_not_found");

            const player = match.match_player.find(p => p.userId === socket.data.user.userId);
            if (!player) throw new Error("not_in_match");

            const opponent = match.match_player.find(p => p.id !== player.id);
            await prisma.match.update({
                where: { id: matchId },
                data: { status: "FINISHED", winnerId: opponent?.userId ?? null }
            });

            io.to(room).emit("match:finished", { matchId, winnerId: opponent?.userId ?? null, reason: "resign" });
            ack?.({ ok: true, matchId });
        } catch (e: any) {
            ack?.({ ok: false, error: e.message || "unknown_error" });
        }
    });

    // On disconnect, start a 60s forfeit timer if no other sockets remain after grace
    socket.on("disconnect", async (_reason) => {
        const userId: number = socket.data?.user?.userId;
        if (!userId) return;
        const k = keyFor(userId);
        // If another socket for this user is still in the room, don't schedule
        try {
            const socketsNow = await io.in(room).fetchSockets();
            const stillHereNow = socketsNow.some(s => s.data?.user?.userId === userId && s.id !== socket.id);
            if (stillHereNow) return;
        } catch { }
        if (timers.has(k)) return; // already scheduled by another socket of this user
        const t = setTimeout(async () => {
            try {
                // If the player reconnected in the meantime, abort
                const sockets = await io.in(room).fetchSockets();
                const stillHere = sockets.some(s => s.data?.user?.userId === userId);
                if (stillHere) return;

                const match = await fetchCurrentGameStateById(matchId);
                if (!match || match.status === "FINISHED") return;
                const loser = match.match_player.find(p => p.userId === userId);
                const winner = match.match_player.find(p => p.userId !== userId);
                await prisma.match.update({ where: { id: matchId }, data: { status: "FINISHED", winnerId: winner?.userId ?? null } });
                io.to(room).emit("match:finished", { matchId, winnerId: winner?.userId ?? null, reason: "disconnect" });
            } catch (e) {
                // ignore
            } finally {
                timers.delete(k);
            }
        }, 60_000);
        timers.set(k, t);
    });
}