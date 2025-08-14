import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { isInCheck } from "@/logic/engine/validator.js";
import { mergeStatus, resolveTargetOccupied } from "@/logic/engine/utils.js";
import { chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

const shadowBind: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
    const hunter = ctx.piecesById.get(pieceId)!;
    if (hunter.type !== "SHADOW_HUNTER") return { ok: false, error: "wrong_piece_type" } as const;
    if (hunter.posX == null || hunter.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[hunter.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = hunter.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    const resolved = resolveTargetOccupied(ctx, attempt.target);
    if (!resolved.ok) return { ok: false, error: resolved.error } as const;
    const targetPieceId = resolved.pieceId;
    const targetX = resolved.x;
    const targetY = resolved.y;

    const targetPiece = ctx.piecesById.get(targetPieceId!)!;
    if (targetPiece.captured) return { ok: false, error: "target_captured" } as const;

    const targetOwner = ctx.match.match_player.find(mp => mp.userId === targetPiece.playerId)!;
    if (targetOwner.color === ctx.currentColor) return { ok: false, error: "target_is_ally" } as const;

    const dx = Math.abs(targetX - hunter.posX);
    const dy = Math.abs(targetY - hunter.posY);
    if (!(dx === 1 && dy === 1)) return { ok: false, error: "not_adjacent_diagonal" } as const;

    const cost = def.activeAbility?.cost ?? 0;
    const newStatus = mergeStatus(targetPiece.status || {}, { immobilizedOnTurn: ctx.match.turn + 1 });
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
};

export const registry: AbilityRegistry = {
    "SHADOW_HUNTER:Shadow Bind": shadowBind,
};
