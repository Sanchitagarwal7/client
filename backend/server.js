const express = require('express');
const { createServer } = require('node:http')
const { Server } = require('socket.io')
const port = 3000;

const app = express();
const server = createServer(app)

const io = new Server({
    cors: {
      origin: "http://localhost:3000"
    }
});

io.on('connection', (socket)=>{
    console.log('a user got connected');
    socket.on('disconnect', (socket)=>{
        console.log('a user got disconnected');
    })
})

server.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})

