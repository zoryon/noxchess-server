import { HandlerContext } from "@/types/index.js";

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
    return tx.match_move.create({
        data: {
            matchId: ctx.match.id,
            playerId: ctx.me.userId,
            moveNumber: ctx.match.turn,
            ...data,
            specialAbilityUsed: data.specialAbilityUsed ?? 1,
            moveType: (data as any).moveType ?? "NORMAL"
        } as any
    });
}

export function incTurnTx(tx: any, ctx: HandlerContext) {
    return tx.match.update({ where: { id: ctx.match.id }, data: { turn: { increment: 1 } } });
}
