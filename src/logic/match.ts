import { DefaultEventsMap, RemoteSocket, Server, Socket } from "socket.io";

import { GameState } from "@/types/index.js";
import { addToQueue, findMatchInQueue } from "@/logic/queue.js";
import { setupBoard } from "@/logic/setup.js";
import { deployGameHandler, fetchCurrentGameStateById } from "@/logic/game.js";

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

    // Check if there is another waiting player
    const result = await findMatchInQueue(userId);

    if (!result) {
        // No opponent found, notify client
        socket.emit("match:searching");
        return { gameState: undefined, opponentId: -1, oppSocket: undefined };
    }

    // Setup board
    await setupBoard(result.match.id, userId, result.opponentId);

    // Fetch full game state (match, players, pieces)
    const gameState = await fetchCurrentGameStateById(result.match.id);

    if (!gameState) {
        console.warn(`Game state for matchId ${result.match.id} not found.`);
        return { gameState: undefined, opponentId: -1, oppSocket: undefined };
    }

    // Get the opponent player
    const sockets = await io.fetchSockets();
    const oppSocket = sockets.find(s => s.data.user.userId === result.opponentId);

    await deployGameHandler(io, socket, gameState.id);

    return { gameState, opponentId: result.opponentId, oppSocket };
}

