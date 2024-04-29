import { useState } from "react";
import { MOVE } from "../../../server/src/Message";

export const ChessBoard = ({chess,setBoard,socket,board}) => {
    const [from,setFrom] = useState(null);
    return <div className="text-white-200">
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i)
                    return <button onClick={()=>{
                        if(!from){
                            setFrom(squareRepresentation);
                        }else {
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: {
                                    move: {
                                        from,
                                        to: squareRepresentation
                                    }
                                }
                            }))

                            setFrom(null)
                            chess.move({
                                from,
                                to: squareRepresentation
                            });
                            setBoard(chess.board());
                            console.log({
                                from,
                                to: squareRepresentation
                            })
                        }
                    }} key={j} className={`w-8 h-8 ${i % 2 === j % 2 ? "bg-gray-500" : "bg-gray-300"}`}>
                        {square ? square.type : ""}
                    </button>
                })}
            </div>
        })}
    </div>

}