import jwt from "jsonwebtoken";
import { config } from "../config.js";
import { findUserById, toPublicUser } from "../data/users.js";

// Verifies the "Authorization: Bearer <token>" header and attaches req.user.
export function requireAuth(req, res, next) {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");

    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Missing or malformed Authorization header" });
    }

    try {
        const payload = jwt.verify(token, config.jwtSecret);
        const user = findUserById(payload.sub);
        if (!user) {
            return res.status(401).json({ message: "User no longer exists" });
        }
        req.user = toPublicUser(user);
        next();
    } catch {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}
