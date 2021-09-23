const express = require('express') //apply the Express library
const app = express()

const http = require('http') // Use http to create a server
const server = http.createServer(app) //apply app to the server
const {Server} = require('socket.io') // apply the socket.io library

const io = new Server(server) //create a web socket based on server


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
    //Use sendFile to link the index.html page to connect other users.
})

io.on('connection', (Socket) => {
    console.log('user connecting')
    Socket.on('on-chat', data => {
        io.emit('user-chat', data)
    })
})

server.listen(3000, () => {
    console.log('listening on port 3000')
})