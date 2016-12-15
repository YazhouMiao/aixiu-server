/*
 * 一对一聊天
 */
var socketServer = require('./init').server;

// socket监听
socketServer.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnected', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        socket.emit('chat message', {msg: 'hello'});
    });
});