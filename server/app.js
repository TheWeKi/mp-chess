import { WebSocketServer } from "ws";

const ws = new WebSocketServer({
    port: process.env.PORT || 8080,
});

import { GameManager } from "./src/GameManager.js";

const gameManager = new GameManager();

ws.on("connection", (socket) => {

    gameManager.addUser(socket);

    socket.on("disconnect", () => {
        gameManager.removeUser(socket);
    });
});

export { ws };