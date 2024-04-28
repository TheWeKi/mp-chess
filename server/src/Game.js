import { Chess } from "chess.js";
import { GAME_OVER, INIT_GAME, MOVE } from "./Message.js";

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        this.moveCount = 0;

        this.player1.send(JSON.stringify({ type: INIT_GAME, payload: { color: "white" } }));
        this.player2.send(JSON.stringify({ type: INIT_GAME, payload: { color: "black" } }));
    }

    // move = { from: "e2", to: "e4" }
    makeMove(socket, move) {


        // validation

        if (this.moveCount % 2 === 0 && socket !== this.player1) {
            return;
        }

        if (this.moveCount % 2 === 1 && socket !== this.player2) {
            return;
        }

        try {
            // is it user move
            // is the move valid
            // update board
            // push move to moves
            this.board.move(move);
        } catch (error) {
            console.log(error);
        }


        // check if game is over

        if (this.board.isGameOver()) {

            console.log(this.board.fen());

            this.player1.send(
                JSON.stringify({
                    type: GAME_OVER,
                    payload: {
                        "winner": this.board.turn() === "w" ? "black" : "white",
                    }
                })
            );
            this.player2.send(
                JSON.stringify({
                    type: GAME_OVER,
                    payload: {
                        "winner": this.board.turn() === "w" ? "black" : "white",
                    }
                })
            );
        }

        // send updated board to both players

        if (this.moveCount % 2 === 0) {
            this.player2.send(
                JSON.stringify({
                    type: MOVE,
                    payload: move
                })
            );
        } else {
            this.player1.send(
                JSON.stringify({
                    type: MOVE,
                    payload: move
                })
            );
        }


        // increment move count
        this.moveCount++;
    }
}
