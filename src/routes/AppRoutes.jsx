import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import LoginPage from "../features/auth/login/LoginPage";
import LobbyPage from "../features/lobby/LobbyPage";
import GamePage from "../features/game/GamePage";
import LeaderboardPage from "../features/leaderboard/LeaderboardPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/lobby" element={<LobbyPage />} />
            <Route path="/game/:roomId" element={<GamePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
    );
}