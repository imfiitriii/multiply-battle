export default function Loader() {
    return (
        <div className="w-[300px] h-[100px] flex justify-center items-end">

            {[0, 1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="w-[20px] h-[10px] mx-[5px] bg-linear-to-b from-[#14FFEC] to-[#0D7377] rounded-md animate-loadingWave"
                    style={{
                        animationDelay: `${i * 0.1}s`,
                    }}
                />
            ))}

        </div>
    );
}