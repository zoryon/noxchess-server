import { HandlerContext } from "@/types/index.js";
import { mergeStatus, removeStatusKeys } from "@/logic/engine/utils.js";

// Lightweight helpers to be called inside a prisma.$transaction(async (tx) => {...}) block.
// Keep signatures simple and avoid Prisma types to prevent type coupling.

export function chargeDETx(tx: any, ctx: HandlerContext, amount: number) {
    return tx.match_player.update({ where: { id: ctx.me.id }, data: { dreamEnergy: { decrement: amount } } });
}

export function addDETx(tx: any, ctx: HandlerContext, amount: number) {
    return tx.match_player.update({ where: { id: ctx.me.id }, data: { dreamEnergy: { increment: amount } } });
}

type LogMoveData = {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    pieceType: any;
    capturedPieceType?: any;
    specialAbilityUsed?: number;
    moveType?: "NORMAL" | "CASTLE" | "ABILITY" | "MEDITATE";
};

export function logMoveTx(tx: any, ctx: HandlerContext, data: LogMoveData) {
    // Strip non-schema fields like moveType; keep only columns defined in Prisma schema
    const { moveType: _ignoredMoveType, ...rest } = data as any;
    return tx.match_move.create({
        data: {
            matchId: ctx.match.id,
            playerId: ctx.me.userId,
            moveNumber: ctx.match.turn,
            ...rest,
            specialAbilityUsed: rest.specialAbilityUsed ?? 0,
        } as any
    });
}

export async function incTurnTx(tx: any, ctx: HandlerContext) {
    // Increment turn
    await tx.match.update({ where: { id: ctx.match.id }, data: { turn: { increment: 1 } } });

    // Start-of-turn effects for the new current player (opponent of the mover)
    const newColor = ctx.currentColor === "WHITE" ? "BLACK" : "WHITE";
    const mp = (ctx.match.match_player as any[]).find(p => p.color === newColor);
    if (!mp) return;

    // Find all of their active pieces with Funeral Wail counters
    const pieces = await tx.match_piece.findMany({ where: { matchId: ctx.match.id, playerId: mp.userId, captured: 0 } });
    let drains = 0;
    for (const p of pieces) {
        const st: any = p.status ?? {};
        const remain: number = st.wailDrainRemaining ?? 0;
        if (remain > 0) {
            drains += 1;
            const nextRemain = Math.max(0, remain - 1);
            const nextStatus = nextRemain > 0
                ? mergeStatus(st, { wailDrainRemaining: nextRemain })
                : removeStatusKeys(st, ["wailDrainRemaining"]);
            await tx.match_piece.update({ where: { id: p.id }, data: { status: nextStatus as any } });
        }
    }
    if (drains > 0) {
        await tx.match_player.update({ where: { id: mp.id }, data: { dreamEnergy: { decrement: drains } } });
    }
}
