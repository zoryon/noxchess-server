import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { isInCheck } from "@/logic/engine/validator.js";
import { cloneBoard, isInside, mergeStatus } from "@/logic/engine/utils.js";
import { chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

// Shadow swap: Move like a rook; cannot capture. Along the chosen line, you may end on an allied piece's square and swap with it; otherwise land on an empty square.
const shadowSwap: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
    const hunter = ctx.piecesById.get(pieceId)!;
    if (hunter.type !== "SHADOW_HUNTER") return { ok: false, error: "wrong_piece_type" } as const;
    if (hunter.posX == null || hunter.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[hunter.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = hunter.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    if (!attempt.target || typeof (attempt.target as any).x !== "number" || typeof (attempt.target as any).y !== "number") {
        return { ok: false, error: "missing_target" } as const;
    }
    const to = attempt.target as { x: number; y: number };
    if (!isInside(to.x, to.y)) return { ok: false, error: "out_of_bounds" } as const;

    const from = { x: hunter.posX, y: hunter.posY };
    const same = (from.x === to.x && from.y === to.y);
    if (same) return { ok: false, error: "illegal_destination" } as const;
    const aligned = (from.x === to.x) || (from.y === to.y);
    if (!aligned) return { ok: false, error: "illegal_destination" } as const;

    const dx = Math.sign(to.x - from.x);
    const dy = Math.sign(to.y - from.y);

    // Walk along line; allow passing through allies; enemies block; capture is forbidden (including at target)
    let x = from.x + dx, y = from.y + dy;
    let targetIsAlly = false;
    let swapPieceId: number | null = null;
    while (x !== to.x || y !== to.y) {
        const idAt = ctx.board[y][x];
        if (idAt != null) {
            const p = ctx.piecesById.get(idAt)!;
            const owner = ctx.match.match_player.find(mp => mp.userId === p.playerId)!;
            if (owner.color !== ctx.currentColor) return { ok: false, error: "blocked_by_enemy" } as const;
            // Ally on path: passing through allowed
        }
        x += dx; y += dy;
    }

    const atDest = ctx.board[to.y][to.x];
    if (atDest != null) {
        const p = ctx.piecesById.get(atDest)!;
        const owner = ctx.match.match_player.find(mp => mp.userId === p.playerId)!;
        if (owner.color !== ctx.currentColor) return { ok: false, error: "cannot_capture_during_swap" } as const;
        // Swapping with ally at destination
        targetIsAlly = true;
        swapPieceId = p.id;
    }

    // Simulate board for king safety
    const board2 = cloneBoard(ctx.board);
    board2[from.y][from.x] = null;
    if (!targetIsAlly) {
        // moving to empty
        board2[to.y][to.x] = hunter.id;
    } else {
        // swap: hunter to ally square; ally to from
        board2[to.y][to.x] = hunter.id;
        const ally = ctx.piecesById.get(swapPieceId!)!;
        if (ally.posX != null && ally.posY != null) board2[ally.posY][ally.posX] = null;
        board2[from.y][from.x] = swapPieceId!;
    }

    const pieces2 = new Map(ctx.piecesById);
    pieces2.set(hunter.id, { ...hunter, posX: to.x, posY: to.y } as any);
    if (targetIsAlly && swapPieceId) {
        const ally = ctx.piecesById.get(swapPieceId)!;
        pieces2.set(ally.id, { ...ally, posX: from.x, posY: from.y } as any);
    }
    const myColor = ctx.currentColor as any;
    if (isInCheck(ctx, myColor, board2, pieces2)) return { ok: false, error: "king_in_check" } as const;

    const cost = def.activeAbility?.cost ?? 0;
    await prisma.$transaction(async (tx) => {
        await chargeDETx(tx, ctx, cost);
        // Update hunter position and mark moved/usedAbility
        await tx.match_piece.update({ where: { id: hunter.id }, data: { posX: to.x, posY: to.y, usedAbility: used + 1, status: mergeStatus(hunter.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn }) as any } });
        if (targetIsAlly && swapPieceId) {
            await tx.match_piece.update({ where: { id: swapPieceId }, data: { posX: from.x, posY: from.y } });
        }
        await logMoveTx(tx, ctx, { fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, pieceType: hunter.type, capturedPieceType: null, specialAbilityUsed: 1 });
        await incTurnTx(tx, ctx);
    });

    return { ok: true, broadcast: { ability: "Shadow swap", pieceId: hunter.id, from, to, swappedPieceId: swapPieceId ?? undefined } } as const;
};

export const registry: AbilityRegistry = {
    "SHADOW_HUNTER:Shadow swap": shadowSwap,
};
