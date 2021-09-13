import { app } from './app';
import * as http from 'http';

const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT);

server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
});