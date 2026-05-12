import { useState } from "react";
import Background from "../../components/Background";
import Button from "../../components/Button";
import QuestionCard from "../../components/QuestionCard";

export default function GamePage() {
    const [answer,setAnswer] = useState("")
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-10">
                
                <QuestionCard questionNum={1} num1={1} num2={2}></QuestionCard>
                <h1 className="text-2xl font-semibold font-poppins -mb-10">Your answer : {answer}</h1>
                <div className="grid grid-cols-3 gap-4 -mb-6 mt-10">
                    {numbers.map((num) => (
                        <Button onClick={() => setAnswer((prev) => prev + num.toString())} key={num}><span className="text-2xl text-center pl-2 pr-3 pt-2 pb-2 font-bold">{num}</span></Button>
                    ))}
                </div>
                {/* 0 button */}
                <div className="flex flex-r0w justify-center items-center gap-2">
                    <Button onClick={() => setAnswer((prev) => prev + "0")} key={0}><span className="inline-block text-2xl text-center p-3 font-bold">{0}</span></Button>
                    <Button onClick={() => setAnswer((prev) => prev.slice(0, -1))}><span className="text-1xl p-3 font-bold">Del</span></Button>
                    <Button onClick={() => console.log(parseInt(answer))}><span className="text-1xl p-3 font-bold">Submit</span></Button>
                </div>
            </div>
        </Background >
    );
}