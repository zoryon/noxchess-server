import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { AbilityAttempt, HandlerContext } from "@/types/index.js";
import { mergeStatus } from "@/logic/engine/utils.js";
import { isInCheck } from "@/logic/engine/validator.js";
import { addDETx, chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";

export type AbilityResult = { ok: true; broadcast: any } | { ok: false; error: string; details?: any };

// Active abilities entry point.
// Each ability is implemented below; this function wires validation, Field of Fear, DE costs, and usage caps.

export async function applyAbility(ctx: HandlerContext, attempt: AbilityAttempt, userId: number): Promise<AbilityResult> {
    if (ctx.me.userId !== userId) return { ok: false, error: "not_your_turn" };

    const piece = ctx.piecesById.get(attempt.pieceId);
    if (!piece) return { ok: false, error: "piece_not_found" };
    if (piece.captured) return { ok: false, error: "piece_captured" };

    // Ensure ownership
    const owner = ctx.match.match_player.find(mp => mp.userId === piece.playerId);
    if (!owner || owner.id !== ctx.me.id) return { ok: false, error: "not_your_piece" };

    // Passive: Field of Fear — if this piece is next to an enemy Sleepless Eye, it can't use abilities.
    // In CHAOS the radius is 2 instead of 1. Implemented here so it blocks all actives uniformly.
    const fearRadius = ctx.phase === "CHAOS" ? 2 : 1;
    for (const p of ctx.piecesById.values()) {
        if (p.captured) continue;
        if (p.type !== "SLEEPLESS_EYE") continue;
        const eyeOwner = ctx.match.match_player.find(mp => mp.userId === p.playerId);
        if (!eyeOwner || eyeOwner.color === ctx.currentColor) continue; // only enemy Eye matters
        if (p.posX == null || p.posY == null || piece.posX == null || piece.posY == null) continue;
        const dx = Math.abs(p.posX - piece.posX);
        const dy = Math.abs(p.posY - piece.posY);
        if (dx <= fearRadius && dy <= fearRadius && !(dx === 0 && dy === 0)) {
            return { ok: false, error: "ability_blocked_by_field_of_fear" };
        }
    }

    // Enforce DE cost (from constants) and per-piece usage caps.
    const cost = abilityCost(piece.type, attempt.name);
    if (ctx.me.dreamEnergy < cost) return { ok: false, error: "insufficient_de" };

    // Dispatch ability
    switch (`${piece.type}:${attempt.name}`) {
        case "SLEEPLESS_EYE:Terrifying Gaze":
            return terrifyingGaze(ctx, piece.id, attempt);
        case "PHANTOM_MATRIARCH:Ethereal Passage":
            return etherealPassage(ctx, piece.id, attempt);
        case "SHADOW_HUNTER:Shadow Bind":
            return shadowBind(ctx, piece.id, attempt);
        case "DOPPELGANGER:Mimicry":
            return mimicry(ctx, piece.id, attempt);
        case "PHOBIC_LEAPER:Terror Leap":
            return terrorLeap(ctx, piece.id, attempt);
        case "PSYCHIC_LARVA:Psychic Burst":
            return psychicBurst(ctx, piece.id, attempt);
        default:
            return { ok: false, error: "unknown_ability" };
    }
}

function abilityCost(type: string, name: string): number {
    const def = PIECES[type];
    if (!def || !def.activeAbility) return 0;
    return def.activeAbility.cost ?? 0;
}

// Ability implementations

async function terrifyingGaze(ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) {
    const eye = ctx.piecesById.get(pieceId)!;
    if (eye.type !== "SLEEPLESS_EYE") return { ok: false, error: "wrong_piece_type" } as const;
    if (eye.posX == null || eye.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[eye.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = eye.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    // Target required: either by pieceId or coordinates.
    if (!attempt.target) return { ok: false, error: "missing_target" } as const;

    let targetPieceId: number | null = null;
    let tx: number | null = null, ty: number | null = null;
    if (typeof (attempt.target as any).pieceId === "number") {
        targetPieceId = (attempt.target as any).pieceId as number;
        const tp = ctx.piecesById.get(targetPieceId || -1);
        if (!tp || tp.posX == null || tp.posY == null) return { ok: false, error: "target_not_found" } as const;
        tx = tp.posX; ty = tp.posY;
    } else if (typeof (attempt.target as any).x === "number") {
        const to = attempt.target as { x: number; y: number };
        if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" } as const;
        const idAt = ctx.board[to.y][to.x];
        if (idAt == null) return { ok: false, error: "no_piece_at_target" } as const;
        targetPieceId = idAt; tx = to.x; ty = to.y;
    } else {
        return { ok: false, error: "invalid_target" } as const;
    }

    const target = ctx.piecesById.get(targetPieceId!)!;
    if (target.captured) return { ok: false, error: "target_captured" } as const;

    // Cannot target ally
    const targetOwner = ctx.match.match_player.find(mp => mp.userId === target.playerId)!;
    if (targetOwner.color === ctx.currentColor) return { ok: false, error: "target_is_ally" } as const;

    // Can't target enemy Sleepless Eye (king) to avoid check edge-cases.
    if (target.type === "SLEEPLESS_EYE") return { ok: false, error: "cannot_target_king" } as const;

    // Must be in straight or diagonal line with no obstacles (line-of-sight).
    const dx = Math.sign((tx as number) - eye.posX);
    const dy = Math.sign((ty as number) - eye.posY);
    const adx = Math.abs((tx as number) - eye.posX);
    const ady = Math.abs((ty as number) - eye.posY);

    const aligned = (dx === 0 || dy === 0) || (adx === ady);
    if (!aligned) return { ok: false, error: "not_in_line_of_sight" } as const;

    // Check clear path between Eye and target (excluding target square).
    let x = eye.posX + dx, y = eye.posY + dy;
    while (x !== tx || y !== ty) {
        if (ctx.board[y][x] !== null) return { ok: false, error: "blocked_line" } as const;
        x += dx; y += dy;
    }

    // Push the target one square further along the same line away from the Eye.
    const pushX = (tx as number) + dx;
    const pushY = (ty as number) + dy;
    if (!isInside(pushX, pushY)) return { ok: false, error: "no_space_to_push" } as const;
    if (ctx.board[pushY][pushX] !== null) return { ok: false, error: "no_space_to_push" } as const;

    // Simulate the new board to check king safety and whether we'd deliver check.
    const board2 = ctx.board.map(r => r.slice());
    // remove target from old square and place in new
    board2[ty as number][tx as number] = null;
    board2[pushY][pushX] = target.id;
    const pieces2 = new Map(ctx.piecesById);
    pieces2.set(target.id, { ...target, posX: pushX, posY: pushY } as any);
    const opponentColor = ctx.currentColor === "WHITE" ? "BLACK" : "WHITE";
    const wouldCheck = isInCheck(ctx, opponentColor as any, board2, pieces2);
    if (wouldCheck) return { ok: false, error: "cannot_deliver_check" } as const;
    // If we're currently in check, this ability must resolve it.
    const myColor = ctx.currentColor as any;
    if (isInCheck(ctx, myColor) && isInCheck(ctx, myColor, board2, pieces2)) {
        return { ok: false, error: "still_in_check" } as const;
    }

    const cost = def.activeAbility?.cost ?? 0;
    await prisma.$transaction(async (txdb) => {
        await chargeDETx(txdb, ctx, cost);
        await txdb.match_piece.update({ where: { id: eye.id }, data: { usedAbility: used + 1 } });
        await txdb.match_piece.update({ where: { id: target.id }, data: { posX: pushX, posY: pushY } });
        await logMoveTx(txdb, ctx, { fromX: (tx as number), fromY: (ty as number), toX: pushX, toY: pushY, pieceType: eye.type, capturedPieceType: null, specialAbilityUsed: 1 });
        await incTurnTx(txdb, ctx);
    });

    return { ok: true, broadcast: { ability: "Terrifying Gaze", eyeId: eye.id, targetPieceId: target.id, from: { x: (tx as number), y: (ty as number) }, to: { x: pushX, y: pushY } } } as const;
}

function isInside(x: number, y: number) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

async function etherealPassage(ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) {
    const piece = ctx.piecesById.get(pieceId)!;
    if (piece.type !== "PHANTOM_MATRIARCH") return { ok: false, error: "wrong_piece_type" } as const;
    if (piece.posX == null || piece.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[piece.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = piece.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    if (!attempt.target || typeof (attempt.target as any).x !== "number") return { ok: false, error: "missing_target" } as const;
    const to = attempt.target as { x: number; y: number };
    if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" } as const;

    const from = { x: piece.posX, y: piece.posY };
    const dx = to.x - from.x; const dy = to.y - from.y;
    const adx = Math.abs(dx); const ady = Math.abs(dy);

    // Queen lines (orthogonal or diagonal), ignoring blockers; destination must be empty.
    const isQueenLine = (dx === 0 || dy === 0) || (adx === ady);
    if (!isQueenLine) return { ok: false, error: "illegal_destination" } as const;

    // Must land on empty square
    const targetId = ctx.board[to.y][to.x];
    if (targetId !== null) return { ok: false, error: "must_land_on_empty" } as const;

    // Funeral Wail (new): no move restriction here; effect handled at start of turn.

    // Commit: spend DE, move piece, increment usedAbility, mark hasMoved, log ABILITY, and end turn.
    const cost = def.activeAbility?.cost ?? 0;
    // Self-check guard: result cannot leave our king in check.
    const myColor = ctx.currentColor as any;
    const board2 = ctx.board.map(r => r.slice());
    // Build simulated board
    board2[from.y][from.x] = null;
    board2[to.y][to.x] = piece.id;
    const pieces2 = new Map(ctx.piecesById);
    pieces2.set(piece.id, { ...piece, posX: to.x, posY: to.y } as any);
    if (isInCheck(ctx, myColor, board2, pieces2)) return { ok: false, error: "king_in_check" } as const;
    await prisma.$transaction(async (tx) => {
        await chargeDETx(tx, ctx, cost);
    await tx.match_piece.update({ where: { id: piece.id }, data: { posX: to.x, posY: to.y, usedAbility: (used + 1), status: mergeStatus(piece.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn }) as any } });
        await logMoveTx(tx, ctx, { fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, pieceType: piece.type, capturedPieceType: null, specialAbilityUsed: 1 });
        await incTurnTx(tx, ctx);
    });

    return { ok: true, broadcast: { ability: "Ethereal Passage", pieceId: piece.id, from, to } } as const;
}

async function shadowBind(ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) {
    const hunter = ctx.piecesById.get(pieceId)!;
    if (hunter.type !== "SHADOW_HUNTER") return { ok: false, error: "wrong_piece_type" } as const;
    if (hunter.posX == null || hunter.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[hunter.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = hunter.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    // Resolve target piece either via coordinates or pieceId.
    let targetPieceId: number | null = null;
    let targetX: number | null = null;
    let targetY: number | null = null;
    if (!attempt.target) return { ok: false, error: "missing_target" } as const;

    if (typeof (attempt.target as any).pieceId === "number") {
        targetPieceId = (attempt.target as any).pieceId as number;
        const tp = ctx.piecesById.get(targetPieceId || -1);
        if (!tp || tp.posX == null || tp.posY == null) return { ok: false, error: "target_not_found" } as const;
        targetX = tp.posX; targetY = tp.posY;
    } else if (typeof (attempt.target as any).x === "number") {
        const to = attempt.target as { x: number; y: number };
        if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" } as const;
        const idAt = ctx.board[to.y][to.x];
        if (idAt == null) return { ok: false, error: "no_piece_at_target" } as const;
        targetPieceId = idAt; targetX = to.x; targetY = to.y;
    } else {
        return { ok: false, error: "invalid_target" } as const;
    }

    const targetPiece = ctx.piecesById.get(targetPieceId!)!;
    if (targetPiece.captured) return { ok: false, error: "target_captured" } as const;

    // Must be enemy
    const targetOwner = ctx.match.match_player.find(mp => mp.userId === targetPiece.playerId)!;
    if (targetOwner.color === ctx.currentColor) return { ok: false, error: "target_is_ally" } as const;

    // Must be diagonally adjacent.
    const dx = Math.abs((targetX as number) - hunter.posX);
    const dy = Math.abs((targetY as number) - hunter.posY);
    if (!(dx === 1 && dy === 1)) return { ok: false, error: "not_adjacent_diagonal" } as const;

    // Apply immobilization for the opponent's next turn (turn+1 after increment).
    const cost = def.activeAbility?.cost ?? 0;
    const newStatus = mergeStatus(targetPiece.status || {}, { immobilizedOnTurn: ctx.match.turn + 1 });
    // If we're currently in check, binding doesn't change the board immediately, so it can't resolve check — disallow.
    const myColorSB = ctx.currentColor as any;
    if (isInCheck(ctx, myColorSB)) return { ok: false, error: "still_in_check" } as const;

    await prisma.$transaction(async (tx) => {
        await chargeDETx(tx, ctx, cost);
        await tx.match_piece.update({ where: { id: targetPiece.id }, data: { status: newStatus as any } });
        await tx.match_piece.update({ where: { id: hunter.id }, data: { usedAbility: used + 1 } });
        await logMoveTx(tx, ctx, { fromX: hunter.posX!, fromY: hunter.posY!, toX: targetX!, toY: targetY!, pieceType: hunter.type, capturedPieceType: null, specialAbilityUsed: 1 });
        await incTurnTx(tx, ctx);
    });

    return { ok: true, broadcast: { ability: "Shadow Bind", pieceId: hunter.id, targetPieceId: targetPiece.id } } as const;
}

async function mimicry(ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) {
    const dopp = ctx.piecesById.get(pieceId)!;
    if (dopp.type !== "DOPPELGANGER") return { ok: false, error: "wrong_piece_type" } as const;
    if (dopp.posX == null || dopp.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[dopp.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = dopp.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    if (!attempt.target) return { ok: false, error: "missing_target" } as const;

    // Resolve adjacent target
    let targetPieceId: number | null = null;
    let txp: number | null = null, typ: number | null = null;
    if (typeof (attempt.target as any).pieceId === "number") {
        targetPieceId = (attempt.target as any).pieceId as number;
        const tp = ctx.piecesById.get(targetPieceId || -1);
        if (!tp || tp.posX == null || tp.posY == null) return { ok: false, error: "target_not_found" } as const;
        txp = tp.posX; typ = tp.posY;
    } else if (typeof (attempt.target as any).x === "number") {
        const to = attempt.target as { x: number; y: number };
        if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" } as const;
        const idAt = ctx.board[to.y][to.x];
        if (idAt == null) return { ok: false, error: "no_piece_at_target" } as const;
        targetPieceId = idAt; txp = to.x; typ = to.y;
    } else {
        return { ok: false, error: "invalid_target" } as const;
    }

    const target = ctx.piecesById.get(targetPieceId!)!;
    if (target.captured) return { ok: false, error: "target_captured" } as const;

    // Exclude Sleepless Eye (king).
    if (target.type === "SLEEPLESS_EYE") return { ok: false, error: "cannot_copy_king" } as const;

    // Must be adjacent (8-neighborhood).
    const dx = Math.abs((txp as number) - dopp.posX);
    const dy = Math.abs((typ as number) - dopp.posY);
    if (dx > 1 || dy > 1 || (dx === 0 && dy === 0)) return { ok: false, error: "not_adjacent" } as const;

    // Copy the target's default movement from constants (for this turn only).
    const targetDef = PIECES[target.type];
    const movement = targetDef?.defaultMovement;
    if (!movement) return { ok: false, error: "movement_unknown" } as const;

    const cost = def.activeAbility?.cost ?? 0;

    // Apply mimic status for this turn only and do NOT increment match.turn (you still move this turn).
    const newStatus = { ...(dopp.status || {}), mimic: movement, mimicTurn: ctx.match.turn };
    await prisma.$transaction(async (txdb) => {
        await txdb.match_player.update({ where: { id: ctx.me.id }, data: { dreamEnergy: { decrement: cost } } });
        await txdb.match_piece.update({ where: { id: dopp.id }, data: { status: newStatus as any, usedAbility: used + 1 } });
        await logMoveTx(txdb, ctx, { fromX: dopp.posX!, fromY: dopp.posY!, toX: dopp.posX!, toY: dopp.posY!, pieceType: dopp.type, capturedPieceType: null, specialAbilityUsed: 1 });
        // no turn increment here
    });

    return { ok: true, broadcast: { ability: "Mimicry", pieceId: dopp.id, copiedFromId: target.id, movement } } as const;
}

async function terrorLeap(ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) {
    const piece = ctx.piecesById.get(pieceId)!;
    if (piece.type !== "PHOBIC_LEAPER") return { ok: false, error: "wrong_piece_type" } as const;
    if (piece.posX == null || piece.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[piece.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = piece.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    if (!attempt.target || typeof (attempt.target as any).x !== "number") return { ok: false, error: "missing_target" } as const;
    const to = attempt.target as { x: number; y: number };
    if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" } as const;

    const from = { x: piece.posX, y: piece.posY };
    const dx = Math.abs(to.x - from.x); const dy = Math.abs(to.y - from.y);
    const isLongL = (dx === 3 && dy === 2) || (dx === 2 && dy === 3);
    if (!isLongL) return { ok: false, error: "illegal_destination" } as const;

    // Funeral Wail (new): no ability restriction; effect handled at start of turn.

    // Destination handling: allow capturing enemies; forbid landing on allies.
    const destId = ctx.board[to.y][to.x];
    if (destId !== null) {
        const destPiece = ctx.piecesById.get(destId)!;
        const destOwner = ctx.match.match_player.find(mp => mp.userId === destPiece.playerId)!;
        if (destOwner.color === ctx.currentColor) return { ok: false, error: "cannot_capture_ally" } as const;
    }

    const isCapture = destId !== null;
    const cost = def.activeAbility?.cost ?? 0;
    // Self-check guard: result cannot leave our king in check.
    const myColorTL = ctx.currentColor as any;
    const board2TL = ctx.board.map(r => r.slice());
    // remove from origin
    board2TL[from.y][from.x] = null;
    // remove captured if any
    if (isCapture && destId != null) {
        board2TL[to.y][to.x] = null;
    }
    // place leaper at destination
    board2TL[to.y][to.x] = piece.id;
    const pieces2TL = new Map(ctx.piecesById);
    pieces2TL.set(piece.id, { ...piece, posX: to.x, posY: to.y } as any);
    if (isInCheck(ctx, myColorTL, board2TL, pieces2TL)) return { ok: false, error: "king_in_check" } as const;

    await prisma.$transaction(async (tx) => {
        // Spend DE
        await chargeDETx(tx, ctx, cost);

        // Capture if present
        if (isCapture) {
            await tx.match_piece.update({ where: { id: destId! }, data: { captured: 1, posX: null, posY: null } });
            // +2 DE for capture per global rule
            await addDETx(tx, ctx, 2);
            // Apply Funeral Wail debuff if captured piece was Phantom Matriarch (3 start-of-turn drains)
            const capturedType = ctx.piecesById.get(destId!)?.type;
            if (capturedType === "PHANTOM_MATRIARCH") {
                const cur = (await tx.match_piece.findUnique({ where: { id: piece.id } }))?.status ?? {};
                const next = mergeStatus(cur, { wailDrainRemaining: 3 });
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: next as any } });
            }
        }

    // Move and increment used ability; mark hasMoved, log ABILITY, end turn.
    await tx.match_piece.update({ where: { id: piece.id }, data: { posX: to.x, posY: to.y, usedAbility: (used + 1), status: mergeStatus((await tx.match_piece.findUnique({ where: { id: piece.id } }))?.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn }) as any } });

    await logMoveTx(tx, ctx, { fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, pieceType: piece.type, capturedPieceType: isCapture ? ctx.piecesById.get(destId!)?.type ?? null : null, specialAbilityUsed: 1 });

        await incTurnTx(tx, ctx);
    });

    return { ok: true, broadcast: { ability: "Terror Leap", pieceId: piece.id, from, to, isCapture } } as const;
}

async function psychicBurst(ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) {
    const larva = ctx.piecesById.get(pieceId)!;
    if (larva.type !== "PSYCHIC_LARVA") return { ok: false, error: "wrong_piece_type" } as const;
    if (larva.posX == null || larva.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[larva.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = larva.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    // Arm for this turn: if this Larva captures during its move this turn, the burst triggers then.
    const armed = mergeStatus(larva.status || {}, { psychicBurstArmedTurn: ctx.match.turn });
    await prisma.$transaction(async (txdb) => {
        await txdb.match_piece.update({ where: { id: larva.id }, data: { status: armed as any } });
        await logMoveTx(txdb, ctx, { fromX: larva.posX!, fromY: larva.posY!, toX: larva.posX!, toY: larva.posY!, pieceType: larva.type, capturedPieceType: null, specialAbilityUsed: 1 });
        // No DE spending and no turn increment here; charge on successful capture only
    });

    return { ok: true, broadcast: { ability: "Psychic Burst", pieceId: larva.id, armedTurn: ctx.match.turn } } as const;
}
