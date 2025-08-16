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

/**
 * Attempts to claim an opponent from the WAITING queue by setting both rows to MATCHED atomically.
 * Does NOT create a match. Returns the claimed opponent id, or null if none/claim failed.
 */
export async function findMatchInQueue(userId: number): Promise<{ opponentId: number } | null> {
    return await prisma.$transaction(async (tx) => {
        // Find someone else who is waiting
        const opp = await tx.match_queue.findFirst({
            where: { status: "WAITING", userId: { not: userId } },
            orderBy: { joinedAt: "asc" }
        });

        if (!opp) return null;

        // First, try to mark opponent as MATCHED if still WAITING
        const uOpp = await tx.match_queue.updateMany({
            where: { id: opp.id, status: "WAITING" },
            data: { status: "MATCHED" }
        });
        if (uOpp.count !== 1) return null;

        // Then, try to mark current user as MATCHED if still WAITING
        const uMe = await tx.match_queue.updateMany({
            where: { userId, status: "WAITING" },
            data: { status: "MATCHED" }
        });
        if (uMe.count !== 1) {
            // Revert opponent claim back to WAITING
            await tx.match_queue.updateMany({ where: { id: opp.id, status: "MATCHED" }, data: { status: "WAITING" } });
            return null;
        }

        return { opponentId: opp.userId };
    });
}

/**
 * Releases a previously claimed (MATCHED) pair back to WAITING, e.g. if opponent socket is missing.
 */
export async function releaseQueueClaim(userId: number, opponentId: number) {
    await prisma.match_queue.updateMany({
        where: { userId: { in: [userId, opponentId] }, status: "MATCHED" },
        data: { status: "WAITING" }
    });
}

/**
 * Cleans both users' queue entries after a match has been created.
 */
export async function finalizeQueueAfterMatch(userId: number, opponentId: number) {
    await prisma.match_queue.updateMany({
        where: { userId: { in: [userId, opponentId] } },
        data: { status: "CANCELLED" }
    });
}