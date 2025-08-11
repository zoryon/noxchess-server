import { Socket } from "socket.io";
import jwt from "jsonwebtoken";

export function jwtMiddleware(socket: Socket, next: (err?: Error) => void) {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token provided"));

    try {
        const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
        socket.data.user = payload; // Attach user data
        next();
    } catch (err) {
        next(new Error("Invalid token"));
    }
}
