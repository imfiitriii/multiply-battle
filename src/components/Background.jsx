export default function Background({children}) {
    return (
        <div className=" bg-[#031516]">
            <div style={{ backgroundImage: "url('/src/assets/background.jpg')" }} className="h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center gap-10 items-center text-white">
                {children}
            </div>
        </div>
    )
}