import {ChessBoard} from "../components/ChessBoard.jsx";
import {useSocket} from "../hooks/useSocket.js";
import {useEffect, useState} from "react";
import {Chess} from "chess.js";
import { GAME_OVER, INIT_GAME, MOVE } from "../../../server/src/Message.js";
export const Game = () =>{
    const socket = useSocket();
    const [chess,setChess] = useState(new Chess());
    const [board,setBoard] = useState(chess.board());
   
    useEffect(() => {
        if(!socket){
            return;
        }
        console.log("Socket connected");
        socket.onmessage = (event)=>{
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type) {
                case INIT_GAME:
                    setBoard(chess.board());
                    console.log("Game initialized");
                    break;
                case MOVE:
                    const move = message.payload.move;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Move received");
                    break;

                case GAME_OVER:
                    console.log("Game over");
                    break;
            }
        }
    }, [socket]);

     if(!socket){
        return <h1>Connecting to server...</h1>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 p-5">
            <div className="flex justify-center">
            <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board}/>
            </div>
            <button onClick={()=>{
                socket.send(JSON.stringify({type:INIT_GAME}));
            }} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start</button>
        </div>
    );
}