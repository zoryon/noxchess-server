import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { isInCheck } from "@/logic/engine/validator.js";
import { cloneBoard, isInside, mergeStatus } from "@/logic/engine/utils.js";
import { chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

const etherealPassage: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
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
    const isQueenLine = (dx === 0 || dy === 0) || (adx === ady);
    if (!isQueenLine) return { ok: false, error: "illegal_destination" } as const;

    const targetId = ctx.board[to.y][to.x];
    if (targetId !== null) return { ok: false, error: "must_land_on_empty" } as const;

    const cost = def.activeAbility?.cost ?? 0;
    const myColor = ctx.currentColor as any;
    const board2 = cloneBoard(ctx.board);
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
};

export const registry: AbilityRegistry = {
    "PHANTOM_MATRIARCH:Ethereal Passage": etherealPassage,
};
