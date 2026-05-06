export default function QuestionCard({num1,num2}) {
    return (
        <div className="group w-[500px] h-[300px] [perspective:1000px] cursor-pointer select-none">

            {/* Card */}
            <div className="relative w-full h-full rounded-lg overflow-hidden text-white bg-[linear-gradient(43deg,#323232_0%,#0D7377_46%,#14FFEC_100%)] transition-all duration-500 v[transform-style:preserve-3d] group-hover:rotate-y-[10deg] group-hover:rotate-x-[10deg] group-hover:scale-105 group-hover:shadow-xl">

                {/* overlay left */}
                <div className="absolute inset-0 z-10 bg-[linear-gradient(transparent,rgba(0,0,0,0.1))] transition-transform duration-500group-hover:-translate-x-full"></div>

                {/* overlay right */}
                <div className="absolute inset-0 z-10 bg-[linear-gradient(transparent,rgba(0,0,0,0.1))] transition-transform duration-500 group-hover:translate-x-full"></div>

                {/* Content */}
                <div className="relative pointer-events-none select-none z-20 h-full flex flex-col items-center justify-center text-center gap-2 p-5">
                    <h2 className="text-9xl font-bold uppercase">
                        {num1 && num2 ? num1 + " x " +  num2 : "N/A"}
                    </h2>
                </div>

            </div>
        </div>
    );
}