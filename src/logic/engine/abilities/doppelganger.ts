import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { resolveTargetOccupied, mergeStatus } from "@/logic/engine/utils.js";
import { logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

const mimicry: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
    const dopp = ctx.piecesById.get(pieceId)!;
    if (dopp.type !== "DOPPELGANGER") return { ok: false, error: "wrong_piece_type" } as const;
    if (dopp.posX == null || dopp.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[dopp.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = dopp.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    if (!attempt.target) return { ok: false, error: "missing_target" } as const;
    const rt = resolveTargetOccupied(ctx, attempt.target);
    if (!rt.ok) return { ok: false, error: rt.error } as const;
    const targetPieceId = rt.pieceId;
    const txp = rt.x;
    const typ = rt.y;

    const target = ctx.piecesById.get(targetPieceId!)!;
    if (target.captured) return { ok: false, error: "target_captured" } as const;
    if (target.type === "SLEEPLESS_EYE") return { ok: false, error: "cannot_copy_king" } as const;

    const dx = Math.abs(txp - dopp.posX);
    const dy = Math.abs(typ - dopp.posY);
    if (dx > 1 || dy > 1 || (dx === 0 && dy === 0)) return { ok: false, error: "not_adjacent" } as const;

    const targetDef = PIECES[target.type];
    const movement = targetDef?.defaultMovement;
    if (!movement) return { ok: false, error: "movement_unknown" } as const;

    const cost = def.activeAbility?.cost ?? 0;
    const newStatus = { ...(dopp.status || {}), mimic: movement, mimicTurn: ctx.match.turn };
    await prisma.$transaction(async (txdb) => {
        await txdb.match_player.update({ where: { id: ctx.me.id }, data: { dreamEnergy: { decrement: cost } } });
        await txdb.match_piece.update({ where: { id: dopp.id }, data: { status: newStatus as any, usedAbility: used + 1 } });
        await logMoveTx(txdb, ctx, { fromX: dopp.posX!, fromY: dopp.posY!, toX: dopp.posX!, toY: dopp.posY!, pieceType: dopp.type, capturedPieceType: null, specialAbilityUsed: 1 });
    });

    return { ok: true, broadcast: { ability: "Mimicry", pieceId: dopp.id, copiedFromId: target.id, movement } } as const;
};

export const registry: AbilityRegistry = {
    "DOPPELGANGER:Mimicry": mimicry,
};
