export default function Button({ children, onClick }) {
    return (
        <div
            onClick={onClick}
            className="animate-pushup relative inline-block p-[3px] rounded-[0.9em] bg-gradient-to-r from-[#14FFEC] to-[#0D7377] group cursor-pointer"
        >

            {/* glow layer */}
            <div className="absolute inset-0 rounded-[0.9em] bg-gradient-to-r from-[#14FFEC] to-[#0D7377] blur-0 group-hover:blur-xl group-active:blur-sm transition-all duration-300 -z-10"></div>

            {/* actual button content */}
            <div className="relative bg-black text-white text-[1.4em] px-[0.8em] py-[0.6em] rounded-[0.5em] shadow-[2px_2px_3px_rgba(0,0,0,0.7)]">
                {children}
            </div>

        </div>
    )
}