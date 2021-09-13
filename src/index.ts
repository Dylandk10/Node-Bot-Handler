//main server for handing routing and sockets 

import { app } from './app';
import * as http from 'http';
import * as socketio from 'socket.io';
import { UserHandler } from './UserHandler';

//server config
const PORT = 8080;
const server = http.createServer(app);
const io: socketio.Server = new socketio.Server();
io.attach(server);


//on connection and disconnection 
io.on("connection", (socket: socketio.Socket)=> {
    console.log("user being added.");
    UserHandler.updateNumberOfUsersOnline(1);

    socket.on("disconnect", () => {
        console.log("user disconnected");
        UserHandler.updateNumberOfUsersOnline(-1);
    });

});



//port listening for server and sockets 
server.listen(PORT);
server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
});