import {useNavigate} from "react-router-dom";
import {WebSocketServer} from "ws";
import {useState} from "react";

const Home = () => {

    const navigate = useNavigate();

    const [socket,setSocket] = useState(null);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
            <div>
            <h1 className="text-3xl font-bold">Play Chess on the #1 Site</h1>
            </div>
            <div className="flex justify-center">
            <h1 className="text-3xl font-bold">Play Chess on the #3 Site</h1>
            <button onClick={()=>{navigate('/game')}} className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Play Chess</button>
            </div>
        </div>
    );
}

export {Home};
