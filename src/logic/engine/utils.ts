import { $Enums } from "@/generated/prisma/index.js";
import { FullMatch, HandlerContext } from "@/types/engine-types.js";
import { DbPiece } from "@/types/pieces-types.js";

export function getPhase(turn: number) {
    if (turn <= 4) return "CALM" as const;
    if (turn <= 20) return "SHADOWS" as const;
    if (turn <= 30) return "UNSTABLE" as const;
    return "CHAOS" as const;
}

// Deterministically compute a "dangerous" square for Unstable Ground (turn 21–30)
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
