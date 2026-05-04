import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Math Battle</h1>
            <button onClick={() => navigate("/lobby")}>Enter lobby</button>
        </div>
    );
}