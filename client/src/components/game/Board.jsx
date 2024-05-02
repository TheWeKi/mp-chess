import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const Board = () => {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const result = game.move(move);
    if (result === null) return null; // illegal move
    setGame(new Chess(game.fen())); // update the game state
    return result;
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0)
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare, targetSquare, piece) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return <Chessboard
      position={game.fen()}
      onPieceDrop={onDrop}
    />;
}

export default Board;     