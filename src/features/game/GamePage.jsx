import Background from "../../components/Background";
import Button from "../../components/Button";
import QuestionCard from "../../components/QuestionCard";

export default function GamePage() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-10">
                <QuestionCard num1={1} num2={2}></QuestionCard>
                <div className="grid grid-cols-3 gap-4 -mb-6 mt-10">
                    {numbers.map((num) => (
                        <Button onClick={() => console.log(num)} key={num}><h1 className="text-4xl p-3 font-bold">{num}</h1></Button>
                    ))}
                </div>
                {/* 0 button */}
                <div className="flex flex-rpw justify-center items-center gap-5">
                    <Button onClick={() => console.log(0)} key={0}><h1 className="text-4xl p-3 font-bold">{0}</h1></Button>
                    <Button onClick={() => console.log("submit")}><h1 className="text-4xl p-3 font-bold">Submit</h1></Button>
                </div>
            </div>
        </Background >
    );
}