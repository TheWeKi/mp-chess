import { useState } from "react";
import { sayHello } from "../api/controllers/hello.controller.js";

const Home = () => {

    const [ message, setMessage ] = useState();

    const getMessage = async () => {
        const data = await sayHello();
        setMessage(data.message);
    }

    return (
        <div>
            <button onClick={() => getMessage()}>Hit Me!</button>
            <h1 className="text-3xl font-bold">{message}</h1>
        </div>
    );
}

export { Home };
