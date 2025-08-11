import { $Enums } from "generated/prisma/index.js";

import { prisma } from "@/lib/prisma.js";

export async function fetchCurrentGameState(match: {
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
}) {
    return await prisma.match.findUnique({
        where: { id: match.id },
        include: {
            match_player: true,
            match_piece: true
        }
    });
}