import { prisma } from "@/lib/prisma.js";

export async function addToQueue(userId: number) {
    await prisma.match_queue.upsert({
        where: { userId },
        update: { status: "WAITING" },
        create: { userId, status: "WAITING" }
    });
}

export async function cancelWaitingQueue(userId: number) {
    await prisma.match_queue.updateMany({
        where: { userId, status: "WAITING" },
        data: { status: "CANCELLED" }
    });
}

export async function findMatchInQueue(userId: number) {
    return await prisma.$transaction(async (tx) => {
        // Find someone else who is waiting
        const opp = await tx.match_queue.findFirst({
            where: { status: "WAITING", userId: { not: userId } },
            orderBy: { joinedAt: "asc" }
        });

        if (!opp) return null;

        // Lock/update both players to prevent race conditions
        await tx.match_queue.updateMany({
            where: { userId: { in: [userId, opp.userId] } },
            data: { status: "MATCHED" }
        });

        // Create the match + match_player
    const match = await tx.match.create({
            data: {
                status: "ONGOING",
                turn: 1,
                match_player: {
                    create: [
            { userId, color: "WHITE", dreamEnergy: 20 },
            { userId: opp.userId, color: "BLACK", dreamEnergy: 20 }
                    ]
                }
            },
            include: { match_player: true }
        });

        return { match, opponentId: opp.userId };
    });
}