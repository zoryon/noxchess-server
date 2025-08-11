import { prisma } from "@/lib/prisma.js";

import { PIECES } from "@/constants/index.js";
import { PieceInstance, Color, NightmarePieceTypes } from "@/types/index.js";
import { STARTING_POSITIONS } from "@/constants/index.js";

export function generateStartingPieces(): PieceInstance[] {
    const allPieces: PieceInstance[] = [];

    (["white", "black"] as Color[]).forEach(color => {
        Object.entries(PIECES).forEach(([type, def]) => {
            const positions = STARTING_POSITIONS[type as keyof typeof PIECES][color];
            positions.forEach((pos: [number, number], idx: number) => {
                allPieces.push({
                    id: `${color}-${type}-${idx}`,
                    type: type as keyof typeof PIECES,
                    color,
                    position: { col: pos[0], row: pos[1] },
                    abilityUses: def.activeAbility?.maxUses
                        ? { [def.activeAbility.name]: 0 }
                        : {},
                    status: {}
                });
            });
        });
    });

    return allPieces;
}


export async function setupBoard(matchId: number, whitePlayerId: number, blackPlayerId: number) {
    const pieces = generateStartingPieces();

    // Store initial position to DB
    await prisma.match_piece.createMany({
        data: pieces.map(p => ({
            matchId,
            playerId: p.color === "white" ? whitePlayerId : blackPlayerId,
            type: p.type as NightmarePieceTypes,
            posX: p.position.col,
            posY: p.position.row,
            usedAbility: 0,
            captured: 0,
            status: JSON.stringify(p.status),
        }))
    });

    return pieces;
}