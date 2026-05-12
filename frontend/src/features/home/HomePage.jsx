import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className=" bg-[#031516]">
            <div style={{ backgroundImage: "url('/src/assets/background.jpg')" }} className="animate-fadein h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center gap-10 items-center text-white">
                <h1 className="font-poppins text-7xl font-semibold text-shadow-lg transition-transform animate-pushup">Multiply Battle!</h1>
                <h1 className="text-2xl font-poppins transition-transform animate-pushup">
                    Battle with others to see who is the best at multiple!
                </h1>
                <Button onClick={() => navigate("/lobby")}>Enter Lobby</Button>
            </div>
        </div>
    );
}