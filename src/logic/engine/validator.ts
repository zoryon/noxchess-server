import { $Enums, Prisma as PrismaNS } from "@/generated/prisma/index.js";
import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { getDangerousSquare, mergeStatus, removeStatusKeys } from "@/logic/engine/utils.js";
import { addDETx, chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import { HandlerContext, MoveAttempt, MovementKind, DbPiece } from "@/types/index.js";

export type ApplyResult = { ok: true; broadcast: any } | { ok: false; error: string; details?: any };

// Base movement rules for king/queen/rook/bishop/knight/pawn.
// Special rules, passives, and phase effects are layered on top in applyMove.

function isInside(x: number, y: number) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function pathClear(board: (number | null)[][], fromX: number, fromY: number, toX: number, toY: number) {
    const dx = Math.sign(toX - fromX);
    const dy = Math.sign(toY - fromY);
    let x = fromX + dx, y = fromY + dy;
    while (x !== toX || y !== toY) {
        if (board[y][x] !== null) return false;
        x += dx; y += dy;
    }
    return true;
}


function pieceColor(ctx: HandlerContext, p: DbPiece): $Enums.match_player_color {
    const owner = ctx.match.match_player.find(mp => mp.userId === p.playerId);
    return owner?.color ?? "WHITE"; // default shouldn't happen
}

export function canMoveLike(
    ctx: HandlerContext,
    piece: DbPiece,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    overrideMovement?: MovementKind
) {
    const dx = toX - fromX; const dy = toY - fromY;
    const adx = Math.abs(dx); const ady = Math.abs(dy);
    const color = pieceColor(ctx, piece);
    const board = ctx.board;

    const movement: MovementKind = overrideMovement ?? PIECES[piece.type].defaultMovement as MovementKind;

    switch (movement) {
        case "king":
            return adx <= 1 && ady <= 1 && !(adx === 0 && ady === 0);
        case "queen":
            return (adx === ady && pathClear(board, fromX, fromY, toX, toY)) ||
                ((dx === 0 || dy === 0) && pathClear(board, fromX, fromY, toX, toY));
        case "rook":
            return (dx === 0 || dy === 0) && pathClear(board, fromX, fromY, toX, toY);
        case "bishop":
            return (adx === ady) && pathClear(board, fromX, fromY, toX, toY);
        case "knight":
            return (adx === 1 && ady === 2) || (adx === 2 && ady === 1);
        case "pawn": {
            const dir = color === "WHITE" ? 1 : -1;
            // move forward
            if (dx === 0 && dy === dir && ctx.board[toY][toX] === null) return true;
            // double from start row
            const startRow = color === "WHITE" ? 1 : 6;
            if (dx === 0 && fromY === startRow && dy === 2 * dir && ctx.board[fromY + dir][fromX] === null && ctx.board[toY][toX] === null) return true;
            // capture diagonally
            if (adx === 1 && dy === dir) { 
                const targetId = ctx.board[toY][toX];
                if (targetId !== null) {
                    const tp = ctx.piecesById.get(targetId)!;
                    if (pieceColor(ctx, tp) !== color) return true;
                }
            }
            return false;
        }
        default:
            return false;
    }
}

function cloneBoard(board: (number | null)[][]): (number | null)[][] {
    return board.map(row => row.slice());
}

function otherColor(c: $Enums.match_player_color): $Enums.match_player_color {
    return c === "WHITE" ? "BLACK" : "WHITE";
}

function getPieceColor(ctx: HandlerContext, p: DbPiece): $Enums.match_player_color {
    const owner = ctx.match.match_player.find(mp => mp.userId === p.playerId)!;
    return owner.color;
}

export function isInCheck(
    ctx: HandlerContext,
    color: $Enums.match_player_color,
    boardOverride?: (number | null)[][],
    piecesOverride?: Map<number, DbPiece>
) {
    const board = boardOverride ?? ctx.board;
    const pieces = piecesOverride ?? ctx.piecesById;
    // Find king
    let king: DbPiece | undefined;
    for (const p of pieces.values()) {
        if (p.captured) continue;
        if (p.type === "SLEEPLESS_EYE" && getPieceColor(ctx, p) === color) {
            king = p; break;
        }
    }
    if (!king || king.posX == null || king.posY == null) return false; // offboard or captured implies not in check here
    const kx = king.posX, ky = king.posY;
    const enemyColor = otherColor(color);
    // Any enemy that can move to king square?
    for (const p of pieces.values()) {
        if (p.captured) continue;
        if (p.posX == null || p.posY == null) continue;
        if (getPieceColor(ctx, p) !== enemyColor) continue;
        if (canMoveLike({ ...ctx, board } as HandlerContext, p, p.posX, p.posY, kx, ky)) {
            // Ensure path destination isn't blocked by ally (king is ally but at dest; capture logic in canMoveLike for pawn requires enemy at dest which is true)
            return true;
        }
    }
    return false;
}

export function leavesOwnKingInCheck(
    ctx: HandlerContext,
    piece: DbPiece,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    capturedId?: number,
    overrideMovement?: MovementKind
) {
    // Simulate board
    const board2 = cloneBoard(ctx.board);
    // Remove from origin
    board2[fromY][fromX] = null;
    // Remove captured if any
    if (capturedId != null) {
        const cap = ctx.piecesById.get(capturedId);
        if (cap && cap.posX != null && cap.posY != null) {
            board2[cap.posY][cap.posX] = null;
        }
    }
    // Place moving piece at destination
    board2[toY][toX] = piece.id;

    // Clone pieces with updates
    const pieces2 = new Map<number, DbPiece>();
    for (const [id, p] of ctx.piecesById.entries()) {
        if (id === piece.id) {
            pieces2.set(id, { ...p, posX: toX, posY: toY } as DbPiece);
        } else if (id === capturedId) {
            pieces2.set(id, { ...p, captured: 1, posX: null, posY: null } as DbPiece);
        } else {
            pieces2.set(id, p);
        }
    }

    const myColor = getPieceColor(ctx, piece);
    return isInCheck(ctx, myColor, board2, pieces2);
}

export function hasAnyLegalMove(ctx: HandlerContext, color: $Enums.match_player_color) {
    // Iterate all pieces of color and check if any legal move resolves check
    for (const p of ctx.piecesById.values()) {
        if (p.captured) continue;
        if (p.posX == null || p.posY == null) continue;
        if (getPieceColor(ctx, p) !== color) continue;

        // Status: immobilized on current turn
        const st: any = p.status ?? {};
        if (st.immobilizedOnTurn === ctx.match.turn) continue;

        // Mimic override if applies
        const override: MovementKind | undefined = (p.type === "DOPPELGANGER" && st.mimic && st.mimicTurn === ctx.match.turn) ? st.mimic as MovementKind : undefined;

        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (x === p.posX && y === p.posY) continue;
                if (!isInside(x, y)) continue;
                const at = ctx.board[y][x];
                if (at != null) {
                    const tp = ctx.piecesById.get(at)!;
                    if (getPieceColor(ctx, tp) === color) continue; // can't capture ally
                }
                if (!canMoveLike(ctx, p, p.posX, p.posY, x, y, override)) continue;
                const leavesCheck = leavesOwnKingInCheck(ctx, p, p.posX, p.posY, x, y, at ?? undefined, override);
                if (!leavesCheck) return true;
            }
        }
    }
    return false;
}

export function evaluateEnd(ctx: HandlerContext) {
    const currentColor: $Enums.match_player_color = ctx.currentColor;
    const inCheck = isInCheck(ctx, currentColor);
    const anyMove = hasAnyLegalMove(ctx, currentColor);
    if (!anyMove) {
        if (inCheck) {
            // checkmate
            return { outcome: "checkmate" as const, winnerColor: otherColor(currentColor) };
        } else {
            // stalemate
            return { outcome: "stalemate" as const };
        }
    }
    return { outcome: null as null };
}

export async function applyMove(ctx: HandlerContext, attempt: MoveAttempt, userId: number): Promise<ApplyResult> {
    // turn owner
    if (ctx.me.userId !== userId) return { ok: false, error: "not_your_turn" };

    const piece = ctx.piecesById.get(attempt.pieceId);
    if (!piece) return { ok: false, error: "piece_not_found" };
    if (piece.captured) return { ok: false, error: "piece_captured" };
    if (piece.posX == null || piece.posY == null) return { ok: false, error: "piece_offboard" };

    // status: immobilized for this turn (e.g., Shadow Bind)
    const pieceStatus = (piece.status ?? {}) as any;
    if (pieceStatus.immobilizedOnTurn === ctx.match.turn) {
        return { ok: false, error: "piece_immobilized" };
    }

    // ownership
    const owner = ctx.match.match_player.find(mp => mp.userId === piece.playerId);
    if (!owner || owner.id !== ctx.me.id) return { ok: false, error: "not_your_piece" };

    const { from, to } = attempt;
    if (from.x !== piece.posX || from.y !== piece.posY) return { ok: false, error: "mismatch_from" };
    if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" };

    // cannot capture own piece
    const targetId = ctx.board[to.y][to.x];
    if (targetId) {
        const tp = ctx.piecesById.get(targetId)!;
        const tColor = ctx.match.match_player.find(mp => mp.userId === tp.playerId)!.color;
        if (tColor === ctx.currentColor) return { ok: false, error: "cannot_capture_ally" };
    // Camouflage: a Shadow Hunter may be temporarily uncapturable if camouflaged (longer during CHAOS).
        const tStatus: any = tp.status ?? {};
        const camoUntil: number | undefined = tStatus.camouflagedUntilTurn;
        if (tp.type === "SHADOW_HUNTER" && camoUntil && ctx.match.turn <= camoUntil) {
            return { ok: false, error: "target_camouflaged" };
        }
    }

    // base legality with Mimicry override for Doppelgänger (one turn)
    let override: MovementKind | undefined = undefined;
    const mimicStatus = (piece.status ?? {}) as any;
    if (piece.type === "DOPPELGANGER" && mimicStatus.mimic && mimicStatus.mimicTurn === ctx.match.turn) {
        override = mimicStatus.mimic as MovementKind;
    }

    // Special case: castling like normal chess
    function tryCastle(mPiece: DbPiece) {
        if (mPiece.type !== "SLEEPLESS_EYE") return null;
        if (from.y !== to.y) return null;
        const dx = to.x - from.x;
        const adx = Math.abs(dx);
        if (adx !== 2) return null;
        const dir = Math.sign(dx);
        const rookX = dir === 1 ? 7 : 0;
        const rookId = ctx.board[from.y][rookX];
        if (rookId == null) return null;
        const rook = ctx.piecesById.get(rookId)!;
        if (rook.captured) return null;
        if (rook.type !== "SHADOW_HUNTER") return null;
        // same color
        if (pieceColor(ctx, rook) !== pieceColor(ctx, mPiece)) return null;
        const pStatus: any = mPiece.status ?? {};
        const rStatus: any = rook.status ?? {};
        if (pStatus.hasMoved) return null;
        if (rStatus.hasMoved) return null;
        // path between king and rook must be empty
        const start = Math.min(from.x, rookX) + 1;
        const end = Math.max(from.x, rookX) - 1;
        for (let x = start; x <= end; x++) {
            if (ctx.board[from.y][x] != null) return null;
        }
        // king cannot be in check, and cannot pass through check or land in check
        const myColor = pieceColor(ctx, mPiece);
        if (isInCheck(ctx, myColor)) return null;
        const passX = from.x + dir;
        const destX = from.x + 2 * dir;

        // simulate pass-through
        const boardPass = cloneBoard(ctx.board);
        boardPass[from.y][from.x] = null;
        boardPass[from.y][passX] = mPiece.id;
        const piecesPass = new Map<number, DbPiece>(ctx.piecesById);
        piecesPass.set(mPiece.id, { ...mPiece, posX: passX, posY: from.y } as DbPiece);
        if (isInCheck(ctx, myColor, boardPass, piecesPass)) return null;

        // simulate destination
        const boardDest = cloneBoard(boardPass);
        boardDest[from.y][passX] = null;
        boardDest[from.y][destX] = mPiece.id;
        const piecesDest = new Map<number, DbPiece>(piecesPass);
        piecesDest.set(mPiece.id, { ...mPiece, posX: destX, posY: from.y } as DbPiece);
        if (isInCheck(ctx, myColor, boardDest, piecesDest)) return null;

        const rookToX = destX - dir;
        return { rookId, rookFromX: rookX, rookToX, kingToX: destX };
    }

    const castle = tryCastle(piece);
    // Speed-limit (Funeral Wail): when active, only a 1-square king-like step is allowed.
    const pStatus: any = piece.status ?? {};
    const speedLimitRemaining: number = pStatus.speedLimitOneRemaining ?? 0;

    // Creeping Shadows: once during SHADOWS phase, non-king/non-pawn may step 1 diagonal into an empty square.
    let creepingShadowsStep = false;
    if (!castle && ctx.phase === "SHADOWS") {
        const isEligible = piece.type !== "SLEEPLESS_EYE" && piece.type !== "PSYCHIC_LARVA";
        const adx = Math.abs(to.x - from.x), ady = Math.abs(to.y - from.y);
        const destEmpty = ctx.board[to.y][to.x] === null;
        const st: any = piece.status ?? {};
        const notYetUsed = !st.shadowsUsedInShadowsPhase;
        if (isEligible && adx === 1 && ady === 1 && destEmpty && notYetUsed) {
            creepingShadowsStep = true;
        }
    }
    if (speedLimitRemaining > 0) {
        const adx = Math.abs(to.x - from.x), ady = Math.abs(to.y - from.y);
        if (!(adx <= 1 && ady <= 1 && !(adx === 0 && ady === 0))) return { ok: false, error: "speed_limited_to_one" };
        // Disallow castling under speed limit
        if (castle) return { ok: false, error: "speed_limited_to_one" };
    }
    if (!canMoveLike(ctx, piece, from.x, from.y, to.x, to.y, override) && !castle && !creepingShadowsStep && speedLimitRemaining === 0) return { ok: false, error: "illegal_move" };

    // Mental Echo: if echo is pending, this move must match a pre-declared from/to for this turn.
    const echoSt: any = piece.status ?? {};
    const echoActive = (echoSt.echoPendingFromTurn != null && ctx.match.turn >= echoSt.echoPendingFromTurn) && (echoSt.echoPendingTurns ?? 0) > 0;
    if (!castle && echoActive) {
        if (echoSt.echoDeclaredForTurn !== ctx.match.turn) {
            return { ok: false, error: "echo_declaration_required" };
        }
        if (!(echoSt.echoDeclFromX === from.x && echoSt.echoDeclFromY === from.y && echoSt.echoDeclToX === to.x && echoSt.echoDeclToY === to.y)) {
            return { ok: false, error: "echo_move_mismatch" };
        }
    }

    // Mind Parasite: enemy Leapers reduce max sliding range and block pawn double-step (tighter in CHAOS).
    function underParasiteAt(x: number, y: number) {
        for (const p of ctx.piecesById.values()) {
            if (p.captured) continue;
            if (p.type !== "PHOBIC_LEAPER") continue;
            if (p.posX == null || p.posY == null) continue;
            if (getPieceColor(ctx, p) === ctx.currentColor) continue; // only enemy leapers
            const adx = Math.abs(p.posX - x), ady = Math.abs(p.posY - y);
            if ((adx === 1 && ady === 2) || (adx === 2 && ady === 1)) return true;
        }
        return false;
    }

    const parasiteActive = underParasiteAt(from.x, from.y);
    if (!castle && !creepingShadowsStep && parasiteActive) {
        const dx = Math.abs(to.x - from.x), dy = Math.abs(to.y - from.y);
        const step = Math.max(dx, dy);
        const cap = ctx.phase === "CHAOS" ? 5 : 6; // limit sliding range; pawns double-step blocked below
        const movement: MovementKind = override ?? (PIECES[piece.type].defaultMovement as MovementKind);
        if (movement === "rook" || movement === "bishop" || movement === "queen") {
            if (step > cap) return { ok: false, error: "parasite_limit" };
        } else if (movement === "pawn") {
            // disallow double-step
            const myColor = getPieceColor(ctx, piece);
            const dir = myColor === "WHITE" ? 1 : -1;
            if (dy === 2 && dx === 0 && ((to.y - from.y) === 2 * dir)) return { ok: false, error: "parasite_limit" };
        }
    }

    // Creeping Shadows is handled by the creepingShadowsStep flag above.

    // Disallow moves that leave own king in check (skip for castle, handled separately)
    if (!castle) {
        const leavesCheck = leavesOwnKingInCheck(ctx, piece, from.x, from.y, to.x, to.y, targetId ?? undefined, override);
        if (leavesCheck) return { ok: false, error: "king_in_check" };
    }

    // DB transaction: move piece (or castle), capture, increment turn, create move record, adjust DE on capture
    const isCapture = targetId != null;
    let needExtraStep = false; // For Unstable Form (Doppelgänger)
    let promotionPending = false;
    // If Unstable Form is pending, only that Doppelgänger may move to finish it.
    const pendingUnstable = (() => {
        for (const p of ctx.piecesById.values()) {
            if (p.captured) continue;
            if (getPieceColor(ctx, p) !== ctx.currentColor) continue;
            const st: any = p.status ?? {};
            if (st.unstablePendingTurn === ctx.match.turn) return p.id;
        }
        return null;
    })();
    if (pendingUnstable && pendingUnstable !== piece.id) {
        return { ok: false, error: "must_complete_unstable_form" };
    }
    await prisma.$transaction(async (tx) => {
        if (!castle && isCapture) {
            await tx.match_piece.update({ where: { id: targetId! }, data: { captured: 1, posX: null, posY: null } });
            // +2 DE for capture.
            await addDETx(tx, ctx, 2);

            // Funeral Wail: capturing the Phantom Matriarch applies a speed limit to the captor (N=2, CHAOS: 4).
            const capturedType = ctx.piecesById.get(targetId!)?.type;
            if (capturedType === "PHANTOM_MATRIARCH") {
                const current = (piece.status ?? {}) as any;
                const remain = (ctx.phase === "CHAOS") ? 4 : 2;
                const newStatus = mergeStatus(current, { speedLimitOneRemaining: remain });
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: newStatus as any } });
            }

            // Mental Echo: capturing a Psychic Larva imposes an echo declaration requirement on the captor for upcoming turn(s).
            if (capturedType === "PSYCHIC_LARVA") {
                const current = (piece.status ?? {}) as any;
                const turns = (ctx.phase === "CHAOS") ? 2 : 1;
                const newStatus = mergeStatus(current, { echoPendingFromTurn: ctx.match.turn + 1, echoPendingTurns: turns });
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: newStatus as any } });
            }
        }

    // Psychic Burst: if a Larva was armed and then captured a piece, immobilize adjacent enemies next enemy turn; charge DE now and consume the use.
        if (piece.type === "PSYCHIC_LARVA" && isCapture) {
            const st = (piece.status ?? {}) as any;
            if (st.psychicBurstArmedTurn === ctx.match.turn) {
                const cost = (PIECES[piece.type].activeAbility?.cost ?? 0);
                await chargeDETx(tx, ctx, cost);

                const oppColor = ctx.currentColor === "WHITE" ? "BLACK" : "WHITE";
                const adj: Array<{ id: number; status: any } | null> = [];
                const dirs = [ [-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1] ];
                for (const [dx, dy] of dirs) {
                    const ax = to.x + dx, ay = to.y + dy;
                    if (ax < 0 || ax > 7 || ay < 0 || ay > 7) continue;
                    const pid = ctx.board[ay][ax];
                    if (pid == null) continue;
                    const p = ctx.piecesById.get(pid)!;
                    if (p.captured) continue;
                    const owner = ctx.match.match_player.find(mp => mp.userId === p.playerId)!;
                    if (owner.color !== oppColor) continue; // immobilize only enemy pieces
                    const ns = mergeStatus(p.status || {}, { immobilizedOnTurn: ctx.match.turn + 1 });
                    adj.push({ id: p.id, status: ns as any });
                }
                for (const upd of adj) {
                    await tx.match_piece.update({ where: { id: upd!.id }, data: { status: upd!.status } });
                }
                // consume the one-time use and clear armed flag
                const cleared = removeStatusKeys(st || {}, ["psychicBurstArmedTurn"]);
                await tx.match_piece.update({ where: { id: piece.id }, data: { usedAbility: (piece.usedAbility ?? 0) + 1, status: cleared as any } });
            }
        }

    if (castle) {
            // Move king and rook, mark hasMoved
            const kingStatus = mergeStatus(piece.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn }) as any;
            await tx.match_piece.update({ where: { id: piece.id }, data: { posX: castle.kingToX, posY: from.y, status: kingStatus } });
            const rook = ctx.piecesById.get(castle.rookId)!;
            const rookStatus = mergeStatus(rook.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn }) as any;
            await tx.match_piece.update({ where: { id: castle.rookId }, data: { posX: castle.rookToX, posY: from.y, status: rookStatus } });

            await logMoveTx(tx, ctx, { fromX: from.x, fromY: from.y, toX: castle.kingToX, toY: from.y, pieceType: piece.type, capturedPieceType: null, specialAbilityUsed: 0 });
            // If this piece had an echo pending and moved now, clear echo flags
            if (echoActive) {
                const clearedEcho = removeStatusKeys(kingStatus, ["echoPendingFromTurn", "echoPendingTurns", "echoDeclaredForTurn", "echoDeclFromX", "echoDeclFromY", "echoDeclToX", "echoDeclToY"]) as any;
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: clearedEcho } });
            }
        } else {
            // Clear mimic after use and mark hasMoved
            if (piece.type === "DOPPELGANGER" && override) {
                const cleared = removeStatusKeys(mimicStatus || {}, ["mimic", "mimicTurn"]) as any;
        const newStatus = mergeStatus(cleared, { hasMoved: true, lastMovedTurn: ctx.match.turn, ...(creepingShadowsStep ? { shadowsUsedInShadowsPhase: true } : {}) }) as any;
                await tx.match_piece.update({ where: { id: piece.id }, data: { posX: to.x, posY: to.y, status: newStatus } });
            } else {
        const newStatus = mergeStatus(piece.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn, ...(creepingShadowsStep ? { shadowsUsedInShadowsPhase: true } : {}) }) as any;
                await tx.match_piece.update({ where: { id: piece.id }, data: { posX: to.x, posY: to.y, status: newStatus } });
            }

            await logMoveTx(tx, ctx, { fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, pieceType: piece.type, capturedPieceType: isCapture ? ctx.piecesById.get(targetId!)?.type ?? null : null, specialAbilityUsed: 0 });

            // Unstable Form: after a Doppelgänger captures, it must make one extra move this turn.
            if (piece.type === "DOPPELGANGER" && isCapture && !pendingUnstable) {
                const cur = (piece.status ?? {}) as any;
                const st2 = mergeStatus(cur, { unstablePendingTurn: ctx.match.turn });
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: st2 as any } });
                needExtraStep = true;
            }

            // Corrupted Promotion: when a Larva reaches the last rank, mark promotionPending.
            if (piece.type === "PSYCHIC_LARVA") {
                const myColor = getPieceColor(ctx, piece);
                const lastRank = myColor === "WHITE" ? 7 : 0;
                if (to.y === lastRank) {
                    const ps = mergeStatus(piece.status || {}, { promotionPending: true });
                    await tx.match_piece.update({ where: { id: piece.id }, data: { status: ps as any } });
                    promotionPending = true;
                }
            }

            // After a successful declared move, clear all echo flags.
            if (echoActive) {
                const curSt: any = (await tx.match_piece.findUnique({ where: { id: piece.id } }))?.status ?? {};
                const cleared = removeStatusKeys(curSt, ["echoPendingFromTurn", "echoPendingTurns", "echoDeclaredForTurn", "echoDeclFromX", "echoDeclFromY", "echoDeclToX", "echoDeclToY"]) as any;
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: cleared } });
            }
        }

    // Unstable Ground: in UNSTABLE, ending on the dangerous square immobilizes this piece on its next own turn.
    if (ctx.phase === "UNSTABLE") {
            const d = getDangerousSquare(ctx.match.id, ctx.match.turn);
            const endedAt = castle ? { x: castle.kingToX, y: from.y } : to;
            if (endedAt.x === d.x && endedAt.y === d.y) {
        // Immobilize this piece on its next turn (not opponent's): set to turn+2 because turns alternate
        const st = mergeStatus((piece.type === "SLEEPLESS_EYE" ? (await tx.match_piece.findUnique({ where: { id: piece.id } }))?.status : (piece.status || {})), { immobilizedOnTurn: ctx.match.turn + 2 }) as any;
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: st } });
            }
        }

        // End-of-turn updates if not requiring extra step
        if (!needExtraStep && !promotionPending) {
            // Decrement speed limit counters if applied and this piece just moved under limit
            if (speedLimitRemaining > 0) {
                const nextRemain = Math.max(0, speedLimitRemaining - 1);
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: mergeStatus(pStatus, { speedLimitOneRemaining: nextRemain }) as any } });
            }

            // Camouflage: Hunters that didn't move this turn become camouflaged until the opponent's next (CHAOS: +2 turns).
            const hunters = await tx.match_piece.findMany({ where: { matchId: ctx.match.id, playerId: ctx.me.userId, type: "SHADOW_HUNTER", captured: 0 } });
            const until = ctx.match.turn + (ctx.phase === "CHAOS" ? 2 : 1);
            for (const h of hunters) {
                const hs: any = h.status ?? {};
                const movedThisTurn = hs.lastMovedTurn === ctx.match.turn;
                const ns = movedThisTurn ? removeStatusKeys(hs, ["camouflagedUntilTurn"]) : mergeStatus(hs, { camouflagedUntilTurn: until });
                await tx.match_piece.update({ where: { id: h.id }, data: { status: ns as any } });
            }

            await incTurnTx(tx, ctx);
        }
    });

    return {
        ok: true,
        broadcast: {
            move: castle
                ? { pieceId: piece.id, from, to: { x: castle.kingToX, y: from.y }, isCapture: false, castle: { rookId: castle.rookId, rookToX: castle.rookToX } }
                : { pieceId: piece.id, from, to, isCapture },
            extraStepRequired: needExtraStep ? { pieceId: piece.id } : undefined,
            promotionRequired: promotionPending ? { pieceId: piece.id } : undefined,
            nextTurn: ctx.match.turn + (needExtraStep || promotionPending ? 0 : 1)
        }
    };
}

// Corrupted Promotion API
export async function applyPromotion(ctx: HandlerContext, larvaId: number, choice: { type: "SUMMON"; pieceType: $Enums.match_piece_type } | { type: "INFEST"; positions: { x: number; y: number }[] }, userId: number): Promise<ApplyResult> {
    if (ctx.me.userId !== userId) return { ok: false, error: "not_your_turn" };
    const larva = ctx.piecesById.get(larvaId);
    if (!larva || larva.captured) return { ok: false, error: "piece_not_found" };
    if (larva.type !== "PSYCHIC_LARVA") return { ok: false, error: "not_larva" };
    const st: any = larva.status ?? {};
    if (!st.promotionPending) return { ok: false, error: "no_promotion_pending" };
    const owner = ctx.match.match_player.find(mp => mp.userId === larva.playerId);
    if (!owner || owner.id !== ctx.me.id) return { ok: false, error: "not_your_piece" };

    if (choice.type === "SUMMON") {
        // Remove larva and resurrect one captured piece of chosen type to its square
        const allowed: $Enums.match_piece_type[] = ["PHANTOM_MATRIARCH", "SHADOW_HUNTER", "DOPPELGANGER", "PHOBIC_LEAPER"];
        if (!allowed.includes(choice.pieceType)) return { ok: false, error: "invalid_summon_type" };
        // Find a captured piece of this type belonging to this player
        const resurrect = Array.from(ctx.piecesById.values()).find(p => p.playerId === larva.playerId && p.type === choice.pieceType && p.captured);
        if (!resurrect) return { ok: false, error: "no_captured_piece_of_type" };

        await prisma.$transaction(async (tx) => {
            await tx.match_piece.update({ where: { id: larva.id }, data: { captured: 1, posX: null, posY: null, status: PrismaNS.DbNull } });
            await tx.match_piece.update({ where: { id: resurrect.id }, data: { captured: 0, posX: larva.posX, posY: larva.posY, status: mergeStatus(resurrect.status || {}, { resurrectedOnTurn: ctx.match.turn }) as any } });
            await logMoveTx(tx, ctx, { fromX: larva.posX!, fromY: larva.posY!, toX: larva.posX!, toY: larva.posY!, pieceType: "PSYCHIC_LARVA", capturedPieceType: null, specialAbilityUsed: 0 });
            // Promotion doesn’t consume a turn; the move that reached last rank already ended the turn or not based on extra step
        });
        return { ok: true, broadcast: { promotion: "SUMMON", larvaId, resurrectedId: resurrect.id, at: { x: larva.posX, y: larva.posY } } };
    } else {
        // INFEST: remove larva; place two new larvae on empty squares of the player's starting row
        const startRow = owner.color === "WHITE" ? 0 : 7;
        const positions = choice.positions;
        if (!Array.isArray(positions) || positions.length !== 2) return { ok: false, error: "need_two_positions" };
        for (const pos of positions) {
            if (!isInside(pos.x, pos.y)) return { ok: false, error: "out_of_bounds" };
            if (pos.y !== startRow) return { ok: false, error: "must_be_on_start_row" };
            if (ctx.board[pos.y][pos.x] != null) return { ok: false, error: "square_occupied" };
        }
        await prisma.$transaction(async (tx) => {
            await tx.match_piece.update({ where: { id: larva.id }, data: { captured: 1, posX: null, posY: null, status: PrismaNS.DbNull } });
            for (let i = 0; i < 2; i++) {
                await tx.match_piece.create({ data: { matchId: ctx.match.id, playerId: ctx.me.userId, type: "PSYCHIC_LARVA", posX: positions[i].x, posY: positions[i].y, captured: 0, usedAbility: 0 } as any });
            }
            await logMoveTx(tx, ctx, { fromX: larva.posX!, fromY: larva.posY!, toX: larva.posX!, toY: larva.posY!, pieceType: "PSYCHIC_LARVA", capturedPieceType: null, specialAbilityUsed: 0, moveType: "NORMAL" });
        });
        return { ok: true, broadcast: { promotion: "INFEST", larvaId, newLarvae: choice.positions } };
    }
}
