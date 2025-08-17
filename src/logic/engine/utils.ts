import { $Enums } from "@/generated/prisma/index.js";
import { FullMatch, HandlerContext } from "@/types/engine-types.js";
import { DbPiece } from "@/types/pieces-types.js";
import { PIECES } from "@/constants/index.js";

export function getPhase(turn: number) {
    // Turns 1–4: CALM; 5–40: SHADOWS; 41–60: UNSTABLE; 61+: CHAOS
    if (turn <= 4) return "CALM" as const;
    if (turn <= 40) return "SHADOWS" as const;
    if (turn <= 60) return "UNSTABLE" as const;
    return "CHAOS" as const;
}

// Deterministically compute a "dangerous" square for Unstable Ground (turns 41–60)
// Uses a simple LCG seeded by matchId and turn so all sockets agree without DB state.
export function getDangerousSquare(matchId: number, turn: number) {
    const seed = (matchId >>> 0) ^ ((turn + 0x9e3779b9) >>> 0);
    const lcg = (n: number) => (Math.imul(n, 1664525) + 1013904223) >>> 0;
    const n1 = lcg(seed);
    const row = n1 % 8;
    const n2 = lcg(n1);
    const col = n2 % 8;
    return { x: col, y: row };
}

export function buildBoard(pieces: DbPiece[]) {
    const board: HandlerContext["board"] = Array.from({ length: 8 }, () => Array(8).fill(null));
    for (const p of pieces) {
        if (p.captured) continue;
        if (p.posX == null || p.posY == null) continue;
        board[p.posY][p.posX] = p.id;
    }
    return board;
}

export function buildHandlerContext(match: FullMatch): HandlerContext {
    const currentColor: $Enums.match_player_color = match.turn % 2 === 1 ? "WHITE" : "BLACK";
    const [p1, p2] = match.match_player as FullMatch["match_player"];
    if (!p1 || !p2) throw new Error("invalid_match_players");
    const board = buildBoard(match.match_piece as DbPiece[]);
    const me = [p1, p2].find(p => p.color === currentColor)! as any;
    const opp = [p1, p2].find(p => p.color !== currentColor)! as any;
    const piecesById = new Map<number, DbPiece>();
    for (const p of match.match_piece as DbPiece[]) piecesById.set(p.id, p);
    return { match, currentColor, me, opp, board, piecesById, phase: getPhase(match.turn) };
}

// --- Status helpers ---
export function mergeStatus(oldStatus: any, patch: Record<string, any>) {
    const base = (oldStatus && typeof oldStatus === 'object') ? oldStatus : {};
    const next: any = { ...base, ...patch };
    for (const key of Object.keys(next)) {
        if (typeof next[key] === 'undefined') delete next[key];
    }
    return next;
}

export function removeStatusKeys(oldStatus: any, keys: string[]) {
    const base = (oldStatus && typeof oldStatus === 'object') ? { ...oldStatus } : {} as any;
    for (const k of keys) delete base[k];
    return base;
}

// --- Generic board helpers & common rules ---
export function isInside(x: number, y: number) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

export function cloneBoard(board: (number | null)[][]): (number | null)[][] {
    return board.map(row => row.slice());
}

export function abilityCost(type: string, name: string): number {
    const def = PIECES[type];
    if (!def || !def.activeAbility) return 0;
    return def.activeAbility.cost ?? 0;
}

// Parse an ability target that must reference an occupied square (either via pieceId or coordinates).
// Keeps original error strings used by abilities.
export function resolveTargetOccupied(
    ctx: HandlerContext,
    target: any
): { ok: true; x: number; y: number; pieceId: number } | { ok: false; error: string } {
    if (!target) return { ok: false, error: "missing_target" };
    if (typeof target.pieceId === "number") {
        const tp = ctx.piecesById.get(target.pieceId || -1);
        if (!tp || tp.posX == null || tp.posY == null) return { ok: false, error: "target_not_found" };
        return { ok: true, x: tp.posX, y: tp.posY, pieceId: tp.id };
    }
    if (typeof target.x === "number" && typeof target.y === "number") {
        if (!isInside(target.x, target.y)) return { ok: false, error: "out_of_bounds" };
        const idAt = ctx.board[target.y][target.x];
        if (idAt == null) return { ok: false, error: "no_piece_at_target" };
        return { ok: true, x: target.x, y: target.y, pieceId: idAt };
    }
    return { ok: false, error: "invalid_target" };
}

// Passive: Field of Fear — blocks using abilities when adjacent to enemy Sleepless Eye (radius 1; CHAOS: 2)
export function isBlockedByFieldOfFear(ctx: HandlerContext, piece: DbPiece): boolean {
    const fearRadius = ctx.phase === "CHAOS" ? 2 : 1;
    for (const p of ctx.piecesById.values()) {
        if (p.captured) continue;
        if (p.type !== "SLEEPLESS_EYE") continue;
        const eyeOwner = ctx.match.match_player.find(mp => mp.userId === p.playerId);
        if (!eyeOwner || eyeOwner.color === ctx.currentColor) continue; // only enemy Eye matters
        if (p.posX == null || p.posY == null || piece.posX == null || piece.posY == null) continue;
        const dx = Math.abs(p.posX - piece.posX);
        const dy = Math.abs(p.posY - piece.posY);
        if (dx <= fearRadius && dy <= fearRadius && !(dx === 0 && dy === 0)) {
            return true;
        }
    }
    return false;
}
