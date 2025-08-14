import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { cloneBoard, isInside, mergeStatus } from "@/logic/engine/utils.js";
import { addDETx, chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import { isInCheck } from "@/logic/engine/validator.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

const terrorLeap: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
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

    const destId = ctx.board[to.y][to.x];
    if (destId !== null) {
        const destPiece = ctx.piecesById.get(destId)!;
        const destOwner = ctx.match.match_player.find(mp => mp.userId === destPiece.playerId)!;
        if (destOwner.color === ctx.currentColor) return { ok: false, error: "cannot_capture_ally" } as const;
    }

    const isCapture = destId !== null;
    const cost = def.activeAbility?.cost ?? 0;
    const myColorTL = ctx.currentColor as any;
    const board2TL = cloneBoard(ctx.board);
    board2TL[from.y][from.x] = null;
    if (isCapture && destId != null) {
        board2TL[to.y][to.x] = null;
    }
    board2TL[to.y][to.x] = piece.id;
    const pieces2TL = new Map(ctx.piecesById);
    pieces2TL.set(piece.id, { ...piece, posX: to.x, posY: to.y } as any);
    if (isInCheck(ctx, myColorTL, board2TL, pieces2TL)) return { ok: false, error: "king_in_check" } as const;

    await prisma.$transaction(async (tx) => {
        await chargeDETx(tx, ctx, cost);

        if (isCapture) {
            await tx.match_piece.update({ where: { id: destId! }, data: { captured: 1, posX: null, posY: null } });
            await addDETx(tx, ctx, 2);
            const capturedType = ctx.piecesById.get(destId!)?.type;
            if (capturedType === "PHANTOM_MATRIARCH") {
                const cur = (await tx.match_piece.findUnique({ where: { id: piece.id } }))?.status ?? {};
                const next = mergeStatus(cur, { wailDrainRemaining: 3 });
                await tx.match_piece.update({ where: { id: piece.id }, data: { status: next as any } });
            }
        }

        await tx.match_piece.update({ where: { id: piece.id }, data: { posX: to.x, posY: to.y, usedAbility: (used + 1), status: mergeStatus((await tx.match_piece.findUnique({ where: { id: piece.id } }))?.status || {}, { hasMoved: true, lastMovedTurn: ctx.match.turn }) as any } });
        await logMoveTx(tx, ctx, { fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, pieceType: piece.type, capturedPieceType: isCapture ? ctx.piecesById.get(destId!)?.type ?? null : null, specialAbilityUsed: 1 });
        await incTurnTx(tx, ctx);
    });

    return { ok: true, broadcast: { ability: "Terror Leap", pieceId: piece.id, from, to, isCapture } } as const;
};

export const registry: AbilityRegistry = {
    "PHOBIC_LEAPER:Terror Leap": terrorLeap,
};
