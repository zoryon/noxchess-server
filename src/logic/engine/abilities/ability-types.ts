import type { AbilityAttempt, HandlerContext } from "@/types/index.js";

export type AbilityResult = { ok: true; broadcast: any } | { ok: false; error: string; details?: any };

export type AbilityHandler = (ctx: HandlerContext, pieceId: number, attempt: AbilityAttempt) => Promise<AbilityResult>;

export type AbilityRegistry = Record<string, AbilityHandler>;
