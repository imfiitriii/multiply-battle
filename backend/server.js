import express from "express";
import cors from "cors";
import { config } from "./src/config.js";
import authRoutes from "./src/routes/auth.js";

const app = express();

app.use(cors({ origin: config.clientOrigin }));
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);

// Fallback 404 for unknown API routes
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.listen(config.port, () => {
    console.log(`Auth server running on http://localhost:${config.port}`);
});
