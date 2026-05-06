export default function Container({ children }) {
    return (
        <div
            className="animate-pushup relative flex flex-col justify-center items-center p-0.75 rounded-[0.9em] bg-linear-to-r from-[#14FFEC] to-[#0D7377] group cursor-pointer"
        >

            {/* glow layer
            <div className="absolute inset-0 rounded-[0.9em] bg-linear-to-r from-[#14FFEC] to-[#0D7377] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"></div> */}

            {/* actual button content */}
            <div className="relative bg-black text-white text-[1.4em] px-[4em] py-[3em] rounded-[0.5em] shadow-[2px_2px_3px_rgba(0,0,0,0.7)]">
                {children}
            </div>

        </div>
    )
}