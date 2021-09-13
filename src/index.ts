//main server for handing routing and sockets 

import { app } from './app';
import * as http from 'http';
import * as socketio from 'socket.io';
import { UserHandler } from './UserHandler';
import { BotHandler } from './BotHandler';
import { User } from './User';

//server config
const PORT = 8080;
const server = http.createServer(app);
const io: socketio.Server = new socketio.Server();
io.attach(server);


//on connection and disconnection 
io.on("connection", (socket: socketio.Socket)=> {;
    UserHandler.updateNumberOfUsersOnline(1);
    UserHandler.addNewUser(socket.id);

    //the chat bot messages 
    socket.on("bot-message", (message: string) => {
        let result: string = BotHandler.getResponse(message);
        socket.emit("bot-message", result);
    });

    socket.on("disconnect", () => {
        UserHandler.updateNumberOfUsersOnline(-1);
        UserHandler.removeUser(socket.id);
    });

});



//port listening for server and sockets 
server.listen(PORT);
server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
});