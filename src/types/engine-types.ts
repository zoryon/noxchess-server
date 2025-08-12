import { $Enums } from "@/generated/prisma/index.js";
import { DbPiece } from "@/types/index.js";
import { getPhase } from "@/logic/engine/utils.js";

export type Coord = { x: number; y: number };

export type MoveAttempt = {
    pieceId: number;           // match_piece.id from DB
    from: Coord;
    to: Coord;
    promoteTo?: $Enums.match_piece_type; // for corrupted promotion
};

export type AbilityAttempt = {
    pieceId: number;           // match_piece.id from DB
    name: string;              // ability name
    target?: Coord | { pieceId: number } | null;
    extra?: Record<string, any>;
};

export type FullMatch = {
    id: number;
    status: $Enums.match_status;
    createdAt: Date | null;
    winnerId: number | null;
    turn: number;
    match_player: {
        id: number;
        userId: number | null;
        matchId: number;
        color: $Enums.match_player_color;
        dreamEnergy: number;
    }[];
    match_piece: DbPiece[];
};

export type HandlerContext = {
    match: FullMatch;
    currentColor: $Enums.match_player_color;
    me: { id: number; userId: number; color: $Enums.match_player_color; dreamEnergy: number };
    opp: { id: number; userId: number; color: $Enums.match_player_color; dreamEnergy: number };
    board: Array<Array<number | null>>; // stores match_piece.id or null
    piecesById: Map<number, DbPiece>;
    phase: ReturnType<typeof getPhase>;
};