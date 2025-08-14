import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { isInCheck } from "@/logic/engine/validator.js";
import { cloneBoard, isInside, resolveTargetOccupied } from "@/logic/engine/utils.js";
import { chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

const terrifyingGaze: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
    const eye = ctx.piecesById.get(pieceId)!;
    if (eye.type !== "SLEEPLESS_EYE") return { ok: false, error: "wrong_piece_type" } as const;
    if (eye.posX == null || eye.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[eye.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = eye.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    const tgt = resolveTargetOccupied(ctx, attempt.target);
    if (!tgt.ok) return { ok: false, error: tgt.error } as const;
    const { x: tx, y: ty, pieceId: targetPieceId } = tgt;

    const target = ctx.piecesById.get(targetPieceId!)!;
    if (target.captured) return { ok: false, error: "target_captured" } as const;

    const targetOwner = ctx.match.match_player.find(mp => mp.userId === target.playerId)!;
    if (targetOwner.color === ctx.currentColor) return { ok: false, error: "target_is_ally" } as const;

    if (target.type === "SLEEPLESS_EYE") return { ok: false, error: "cannot_target_king" } as const;

    const dx = Math.sign(tx - eye.posX);
    const dy = Math.sign(ty - eye.posY);
    const adx = Math.abs(tx - eye.posX);
    const ady = Math.abs(ty - eye.posY);
    const aligned = (dx === 0 || dy === 0) || (adx === ady);
    if (!aligned) return { ok: false, error: "not_in_line_of_sight" } as const;

    let x = eye.posX + dx, y = eye.posY + dy;
    while (x !== tx || y !== ty) {
        if (ctx.board[y][x] !== null) return { ok: false, error: "blocked_line" } as const;
        x += dx; y += dy;
    }

    const pushX = tx + dx;
    const pushY = ty + dy;
    if (!isInside(pushX, pushY)) return { ok: false, error: "no_space_to_push" } as const;
    if (ctx.board[pushY][pushX] !== null) return { ok: false, error: "no_space_to_push" } as const;

    const board2 = cloneBoard(ctx.board);
    board2[ty][tx] = null;
    board2[pushY][pushX] = target.id;
    const pieces2 = new Map(ctx.piecesById);
    pieces2.set(target.id, { ...target, posX: pushX, posY: pushY } as any);
    const opponentColor = ctx.currentColor === "WHITE" ? "BLACK" : "WHITE";
    const wouldCheck = isInCheck(ctx, opponentColor as any, board2, pieces2);
    if (wouldCheck) return { ok: false, error: "cannot_deliver_check" } as const;
    const myColor = ctx.currentColor as any;
    if (isInCheck(ctx, myColor) && isInCheck(ctx, myColor, board2, pieces2)) {
        return { ok: false, error: "still_in_check" } as const;
    }

    const cost = def.activeAbility?.cost ?? 0;
    await prisma.$transaction(async (txdb) => {
        await chargeDETx(txdb, ctx, cost);
        await txdb.match_piece.update({ where: { id: eye.id }, data: { usedAbility: used + 1 } });
        await txdb.match_piece.update({ where: { id: target.id }, data: { posX: pushX, posY: pushY } });
        await logMoveTx(txdb, ctx, { fromX: tx, fromY: ty, toX: pushX, toY: pushY, pieceType: eye.type, capturedPieceType: null, specialAbilityUsed: 1 });
        await incTurnTx(txdb, ctx);
    });

    return { ok: true, broadcast: { ability: "Terrifying Gaze", eyeId: eye.id, targetPieceId: target.id, from: { x: tx, y: ty }, to: { x: pushX, y: pushY } } } as const;
};

export const registry: AbilityRegistry = {
    "SLEEPLESS_EYE:Terrifying Gaze": terrifyingGaze,
};
