import "dotenv/config";

export const config = {
    port: process.env.PORT || 5000,
    // NOTE: hardcoded fallback is for local dev only. Set JWT_SECRET in .env
    // before deploying anywhere real.
    jwtSecret: process.env.JWT_SECRET || "dev_secret_change_me",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
    clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
};
