import { Server, Socket } from "socket.io";

import { setupBoard } from "@/logic/setup.js";
import { addToQueue, findMatchInQueue } from "@/logic/queue.js";
import { fetchCurrentGameState } from "@/logic/game.js";

export async function createMatch(io: Server, socket: Socket) {
    const userId = socket.data.user.userId;

    // Try to insert user into queue
    await addToQueue(userId);

    // Check if there is another waiting player
    const result = await findMatchInQueue(userId);

    if (!result) {
        // No opponent found, notify client
        socket.emit("match:searching");
        return;
    }

    // Setup board
    const pieces = await setupBoard(result.match.id, userId, result.opponentId);

    // Fetch full game state (match, players, pieces)
    const gameState = await fetchCurrentGameState(result.match);

    // Notify both players
    const sockets = await io.fetchSockets();
    const oppSocket = sockets.find(s => s.data.user.userId === result.opponentId);

    if (oppSocket) {
        socket.join(`match:${result.match.id}`);
        oppSocket.join(`match:${result.match.id}`);

        io.to(`match:${result.match.id}`).emit("match:start", {
            ...gameState,
            pieces
        });
    } else {
        // Opponent disconnected or not found — handle as needed
        console.warn(`Opponent socket for userId ${result.opponentId} not found.`);
        // You might want to emit an error or re-queue user here
        socket.emit("error:opponent_disconnected");
    }
}

