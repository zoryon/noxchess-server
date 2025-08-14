import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { mergeStatus } from "@/logic/engine/utils.js";
import { logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

const psychicBurst: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
    const larva = ctx.piecesById.get(pieceId)!;
    if (larva.type !== "PSYCHIC_LARVA") return { ok: false, error: "wrong_piece_type" } as const;
    if (larva.posX == null || larva.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[larva.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = larva.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    const armed = mergeStatus(larva.status || {}, { psychicBurstArmedTurn: ctx.match.turn });
    await prisma.$transaction(async (txdb) => {
        await txdb.match_piece.update({ where: { id: larva.id }, data: { status: armed as any } });
        await logMoveTx(txdb, ctx, { fromX: larva.posX!, fromY: larva.posY!, toX: larva.posX!, toY: larva.posY!, pieceType: larva.type, capturedPieceType: null, specialAbilityUsed: 1 });
    });

    return { ok: true, broadcast: { ability: "Psychic Burst", pieceId: larva.id, armedTurn: ctx.match.turn } } as const;
};

export const registry: AbilityRegistry = {
    "PSYCHIC_LARVA:Psychic Burst": psychicBurst,
};
