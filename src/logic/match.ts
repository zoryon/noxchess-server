import { DefaultEventsMap, RemoteSocket, Server, Socket } from "socket.io";

import { GameState } from "@/types/index.js";
import { addToQueue, findMatchInQueue, finalizeQueueAfterMatch, releaseQueueClaim } from "@/logic/queue.js";
import { setupBoard } from "@/logic/setup.js";
import { fetchCurrentGameStateById } from "@/logic/game.js";
import { prisma } from "@/lib/prisma.js";

type createMatchResult = {
    gameState: GameState | undefined;
    opponentId: number;
    oppSocket: RemoteSocket<DefaultEventsMap, any> | undefined;
};

export async function createMatch(io: Server, socket: Socket): Promise<createMatchResult> {
    const userId = socket.data.user.userId;

    // Note: reconnect path handled in index.ts before calling createMatch

    // Try to insert user into queue
    await addToQueue(userId);

    // Attempt to claim an opponent from the queue
    const claim = await findMatchInQueue(userId);

    if (!claim) {
        // No opponent found, notify client
        socket.emit("match:searching");
        return { gameState: undefined, opponentId: -1, oppSocket: undefined };
    }

    // Ensure opponent socket is connected; otherwise release claim and keep searching
    const sockets = await io.fetchSockets();
    const oppSocket = sockets.find(s => s.data.user.userId === claim.opponentId);
    if (!oppSocket) {
        await releaseQueueClaim(userId, claim.opponentId);
        socket.emit("match:searching");
        return { gameState: undefined, opponentId: claim.opponentId, oppSocket: undefined };
    }

    // Create the match and players now that both sockets are confirmed present
    const match = await (await import("@/lib/prisma.js")).prisma.match.create({
        data: {
            status: "ONGOING",
            turn: 1,
            match_player: {
                create: [
                    { userId, color: "WHITE", dreamEnergy: 20 },
                    { userId: claim.opponentId, color: "BLACK", dreamEnergy: 20 }
                ]
            }
        },
        include: { match_player: true }
    });

    // Setup board pieces
    await setupBoard(match.id, userId, claim.opponentId);

    // Fetch full game state (match, players, pieces)
    const gameState = await fetchCurrentGameStateById(match.id);

    if (!gameState) {
        console.warn(`Game state for matchId ${match.id} not found.`);
        return { gameState: undefined, opponentId: -1, oppSocket: undefined };
    }

    // Finalize queue for both players to prevent stray waiting state
    await finalizeQueueAfterMatch(userId, claim.opponentId);

    return { gameState, opponentId: claim.opponentId, oppSocket };
}

export async function createDirectMatch(io: Server, userA: number, userB: number): Promise<GameState | null> {
    // Create the match and players deterministically (requester white by default)
    const match = await prisma.match.create({
        data: {
            status: "ONGOING",
            turn: 1,
            match_player: {
                create: [
                    { userId: userA, color: "WHITE", dreamEnergy: 20 },
                    { userId: userB, color: "BLACK", dreamEnergy: 20 },
                ],
            },
        },
        include: { match_player: true },
    });

    await setupBoard(match.id, userA, userB);
    const gameState = await fetchCurrentGameStateById(match.id);
    return gameState;
}

export async function createFriendChallenge(fromUserId: number, toUserId: number) {
    // Ensure they are friends
    const areFriends = await prisma.friendship.findFirst({
        where: {
            OR: [
                { userAId: fromUserId, userBId: toUserId },
                { userAId: toUserId, userBId: fromUserId },
            ],
        },
        select: { id: true },
    });
    if (!areFriends) throw new Error("not_friends");

    // Cancel any previous WAITING challenges between these two
    await prisma.friend_challenge.updateMany({
        where: {
            OR: [
                { fromUserId, toUserId, status: "WAITING" },
                { fromUserId: toUserId, toUserId: fromUserId, status: "WAITING" },
            ],
        },
        data: { status: "CANCELLED" },
    });

    const ch = await prisma.friend_challenge.create({ data: { fromUserId, toUserId, status: "WAITING" } });
    return ch;
}

export async function cancelFriendChallenge(userId: number, challengeId: number) {
    await prisma.friend_challenge.updateMany({
        where: { id: challengeId, status: "WAITING", OR: [{ fromUserId: userId }, { toUserId: userId }] },
        data: { status: "CANCELLED" },
    });
}

export async function acceptFriendChallenge(io: Server, challengeId: number, accepterId: number): Promise<GameState | null> {
    // Atomically mark accepted if valid and obtain pair
    const ch = await prisma.$transaction(async (tx) => {
        const cur = await tx.friend_challenge.findUnique({ where: { id: challengeId } });
        if (!cur || cur.status !== "WAITING" || cur.toUserId !== accepterId) return null;
        await tx.friend_challenge.update({ where: { id: challengeId }, data: { status: "ACCEPTED" } });
        return cur;
    });
    if (!ch) return null;

    // Create direct match between from and to
    const game = await createDirectMatch(io, ch.fromUserId, ch.toUserId);
    return game;
}

export async function declineFriendChallenge(challengeId: number, declinerId: number) {
    await prisma.friend_challenge.updateMany({
        where: { id: challengeId, status: "WAITING", toUserId: declinerId },
        data: { status: "DECLINED" },
    });
}

