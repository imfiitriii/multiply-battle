export default function Button({ children, onClick }) {
    return (
        <div
            className="isolate overflow-visible animate-pushup relative inline-block p-0.75 rounded-[0.9em] bg-linear-to-r from-[#14FFEC] to-[#0D7377] group cursor-pointer"
        >

            {/* glow layer */}
            <div className="absolute inset-0 rounded-[0.9em] bg-linear-to-r from-[#14FFEC] to-[#0D7377] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto -z-10"></div>

            {/* actual button content */}
            <button onClick={onClick} className="flex w-full items-stretch bg-black font-poppins text-white text-[1.4em] px-[0.6em] py-[0.4em] rounded-[0.5em] shadow-[2px_2px_3px_rgba(0,0,0,0.7)] cursor-pointer z-10">
                {children}
            </button>

        </div>
    )
}