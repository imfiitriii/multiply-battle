import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config.js";
import { requireAuth } from "../middleware/auth.js";
import {
    createUser,
    findUserByEmail,
    toPublicUser,
} from "../data/users.js";

const router = Router();

function signToken(user) {
    return jwt.sign({ sub: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn,
    });
}

// POST /api/auth/register
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body ?? {};

    if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email and password are required" });
    }
    if (String(password).length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    if (findUserByEmail(email)) {
        return res.status(409).json({ message: "An account with that email already exists" });
    }

    const passwordHash = await bcrypt.hash(String(password), 10);
    const user = createUser({ name, email, passwordHash });
    const token = signToken(user);

    return res.status(201).json({ user: toPublicUser(user), token });
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
    const { email, password } = req.body ?? {};

    if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
    }

    const user = findUserByEmail(email);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const ok = await bcrypt.compare(String(password), user.passwordHash);
    if (!ok) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = signToken(user);
    return res.json({ user: toPublicUser(user), token });
});

// GET /api/auth/me  (protected — returns the current user from the token)
router.get("/me", requireAuth, (req, res) => {
    return res.json({ user: req.user });
});

export default router;
