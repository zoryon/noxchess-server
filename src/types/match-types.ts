import { $Enums } from "generated/prisma/index.js";

export type GameState = {
    match_player: {
        id: number;
        userId: number | null;
        matchId: number;
        color: $Enums.match_player_color;
        dreamEnergy: number;
    }[];
} & {
    id: number;
    createdAt: Date | null;
    status: $Enums.match_status;
    winnerId: number | null;
    turn: number;
}