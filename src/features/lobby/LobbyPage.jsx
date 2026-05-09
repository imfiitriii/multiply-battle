import { useState } from "react";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
export default function LobbyPage() {
    const navigate = useNavigate()
    const [matchmakingStats, setMatchMakingStats] = useState(false)
    return (
        <Background>
            <div className="flex flex-row font-poppins justify-center items-center gap-7">
                <Container>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h1 className="text-3xl font-semibold">How to play</h1>
                        <h1 className="text-1xl font-normal">1. You will be battling with a random player.</h1>
                        <h1 className="text-1xl font-normal">2. When a game starts, a random multiple question from multiple 2 to 12 will appear.</h1>
                        <h1 className="text-1xl font-normal">3. Whoever answer first obtain points.</h1>
                        <h1 className="text-1xl font-normal">4. Whoever got 10 points first wins.</h1>
                        <Button onClick={() => setMatchMakingStats(!matchmakingStats)}><h1 className="text-2xl">{matchmakingStats ? "Cancel" : "Start matchmaking"}</h1></Button>
                    </div>
                </Container>
                {matchmakingStats ? <Container>
                    <div className="flex flex-col justify-center items-center gap-10">
                        <h1 className="text-4xl font-semibold">Finding player...</h1>
                        <Loader></Loader>
                        <h1 className="text-2xl font-semibold">Player Found!</h1>
                        <Button onClick={() => navigate("/game/:roomId")}><h1 className="text-1xl pointer-events-none">Enter battle</h1></Button>
                    </div>
                </Container> : <div></div>}
            </div>
        </Background>
    );
}