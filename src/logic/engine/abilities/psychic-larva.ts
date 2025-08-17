import { prisma } from "@/lib/prisma.js";
import { PIECES } from "@/constants/index.js";
import { isInside } from "@/logic/engine/utils.js";
import { chargeDETx, incTurnTx, logMoveTx } from "@/logic/engine/tx-helpers.js";
import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import type { AbilityHandler, AbilityResult, AbilityRegistry } from "./ability-types.js";

// Whispering Swarm: If at least one friendly Larva is captured, resurrect one onto an empty horizontal-adjacent square of this Larva. Ends the turn.
const whisperingSwarm: AbilityHandler = async (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt): Promise<AbilityResult> => {
    const larva = ctx.piecesById.get(pieceId)!;
    if (larva.type !== "PSYCHIC_LARVA") return { ok: false, error: "wrong_piece_type" } as const;
    if (larva.posX == null || larva.posY == null) return { ok: false, error: "piece_offboard" } as const;

    const def = PIECES[larva.type];
    const maxUses = def.activeAbility?.maxUses ?? Infinity;
    const used = larva.usedAbility ?? 0;
    if (used >= maxUses) return { ok: false, error: "ability_exhausted" } as const;

    if (!attempt.target || typeof (attempt.target as any).x !== "number" || typeof (attempt.target as any).y !== "number") {
        return { ok: false, error: "missing_target" } as const;
    }
    const target = attempt.target as { x: number; y: number };
    if (!isInside(target.x, target.y)) return { ok: false, error: "out_of_bounds" } as const;
    // Must be horizontally adjacent to this Larva
    if (!(target.y === larva.posY && Math.abs(target.x - larva.posX) === 1)) {
        return { ok: false, error: "must_be_horizontally_adjacent" } as const;
    }
    // Destination must be empty
    if (ctx.board[target.y][target.x] !== null) return { ok: false, error: "square_occupied" } as const;

    // Require at least one captured friendly Larva as a resource to summon from
    const capturedPool = Array.from(ctx.piecesById.values()).filter(p => p.playerId === larva.playerId && p.type === "PSYCHIC_LARVA" && p.captured);
    if (capturedPool.length === 0) return { ok: false, error: "no_captured_larva_available" } as const;
    const resurrect = capturedPool[0];

    const cost = def.activeAbility?.cost ?? 0;
    await prisma.$transaction(async (txdb) => {
        // Charge DE and consume one use on the caster
        await chargeDETx(txdb, ctx, cost);
        await txdb.match_piece.update({ where: { id: larva.id }, data: { usedAbility: used + 1 } });

        // Resurrect a captured larva onto target square
        await txdb.match_piece.update({ where: { id: resurrect.id }, data: { captured: 0, posX: target.x, posY: target.y, status: null as any, usedAbility: 0 } });

        // Log and end turn
        await logMoveTx(txdb, ctx, { fromX: larva.posX!, fromY: larva.posY!, toX: larva.posX!, toY: larva.posY!, pieceType: larva.type, capturedPieceType: null, specialAbilityUsed: 1 });
        await incTurnTx(txdb, ctx);
    });

    return { ok: true, broadcast: { ability: "Whispering Swarm", pieceId: larva.id, summonedId: resurrect.id, at: { x: target.x, y: target.y } } } as const;
};

export const registry: AbilityRegistry = {
    "PSYCHIC_LARVA:Whispering Swarm": whisperingSwarm,
};
