const Hero = () => {
    return (
        <div className="flex justify-around">
            <div className="h-[50%] w-[50%]">
                <img src="src/assets/chessboard.webp" alt="Chessboard" />
            </div>

            <div className="flex flex-col space-y-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play Guest
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play With Friend
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play Computer
                </button>
            </div>
        </div>
    )
}

export default Hero;