import type { AbilityAttempt, HandlerContext } from "@/types/index.js";
import { abilityCost, isBlockedByFieldOfFear } from "@/logic/engine/utils.js";
import type { AbilityResult, AbilityRegistry } from "@/logic/engine/abilities/ability-types.js";
import { registry as eye } from "@/logic/engine/abilities/sleepless-eye.js";
import { registry as matriarch } from "@/logic/engine/abilities/phantom-matriarch.js";
import { registry as hunter } from "@/logic/engine/abilities/shadow-hunter.js";
import { registry as dopp } from "@/logic/engine/abilities/doppelganger.js";
import { registry as leaper } from "@/logic/engine/abilities/phobic-leaper.js";
import { registry as larva } from "@/logic/engine/abilities/psychic-larva.js";

const ABILITIES: AbilityRegistry = {
    ...eye,
    ...matriarch,
    ...hunter,
    ...dopp,
    ...leaper,
    ...larva,
};

// Active abilities entry point. Thin dispatcher over modular handlers.
export async function applyAbility(ctx: HandlerContext, attempt: AbilityAttempt, userId: number): Promise<AbilityResult> {
    if (ctx.me.userId !== userId) return { ok: false, error: "not_your_turn" };

    const piece = ctx.piecesById.get(attempt.pieceId);
    if (!piece) return { ok: false, error: "piece_not_found" };
    if (piece.captured) return { ok: false, error: "piece_captured" };

    // Ensure ownership
    const owner = ctx.match.match_player.find(mp => mp.userId === piece.playerId);
    if (!owner || owner.id !== ctx.me.id) return { ok: false, error: "not_your_piece" };

    // In CALM, abilities are disabled
    if (ctx.phase === "CALM") return { ok: false, error: "abilities_disabled_in_calm" };

    // Passive: Field of Fear
    if (isBlockedByFieldOfFear(ctx, piece)) return { ok: false, error: "ability_blocked_by_field_of_fear" };

    // Enforce DE cost (from constants) and per-piece usage caps.
    const cost = abilityCost(piece.type, attempt.name);
    if (ctx.me.dreamEnergy < cost) return { ok: false, error: "insufficient_de" };

    const key = `${piece.type}:${attempt.name}`;
    const handler = ABILITIES[key];
    if (!handler) return { ok: false, error: "unknown_ability" };
    return handler(ctx, piece.id, attempt);
}
// end of module
