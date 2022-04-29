const path = require('path');
const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

httpServer.listen(8080, function () {
    console.log('listening on port 8080');
});


const messages = [
    {author: 'John', text: 'Hello, world'},
    {author: 'Pedro', text: 'Hello Papu'},
    {author: 'Ana', text: 'pibis'}
]

// escucho si un cliente se conecta

io.on('connection', function(socket) {

    console.log('Un cliente se ha conectado');

    socket.emit('messages', messages);


    socket.on('new-message', (data) => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
    
});

app.use(express.static(path.join(__dirname, 'public')));




