import { DefaultEventsMap, RemoteSocket, Server, Socket } from "socket.io";

import { GameState } from "@/types/index.js";
import { addToQueue, findMatchInQueue, finalizeQueueAfterMatch, releaseQueueClaim } from "@/logic/queue.js";
import { setupBoard } from "@/logic/setup.js";
import { fetchCurrentGameStateById } from "@/logic/game.js";

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

