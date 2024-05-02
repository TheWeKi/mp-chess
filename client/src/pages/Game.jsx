import Board from "../components/game/Board.jsx";
import MoveDetails from "../components/game/MoveDetails.jsx";

const Game = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 justify-items-center p-8">
            <Board />
            <MoveDetails />
        </div>
    );
}

export default Game;