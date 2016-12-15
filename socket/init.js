/*
 * socket初始化
 */
var http = require('http');
var io = require('socket.io');

var SocketServer = {
    server: null,
};

SocketServer.init = function(httpServer) {
    if (!(httpServer instanceof http.Server)) {
        throw new Error('The httpServer is required!');
    }

    // socket服务
    let socketServer = io(httpServer);

    this.server = socketServer;

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
}

module.exports = SocketServer;