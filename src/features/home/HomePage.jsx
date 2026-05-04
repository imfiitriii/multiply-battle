import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1>Math Battle</h1>
            <button onClick={() => navigate("/lobby")}>Enter lobby</button>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
}