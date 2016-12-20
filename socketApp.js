/*
 * 包含所有的socket处理逻辑
 * 所有加载的socket处理(obj)应该包含以下内容
 * obj.message：要监听的消息
 * obj.handle：处理内容
 */
var chat = require('./socket/chat');

function handle(socket){
    console.log('a user connected');

    socket.on('disconnected', function () {
        console.log('user disconnected');
    });

    validCheck(chat);
    socket.on(chat.message, chat.handle);
}

function validCheck(obj={}){
    if(typeof obj !== 'object'){
        throw new Error(obj+' must be an object!');
    }
    if(!obj.message || !(typeof obj.message === 'string')){
        throw new Error("The property of message is invalid!");
    }
    if(!(typeof obj.handle === 'function')){
        throw new Error("The property of handle is invalid!");
    }

    return true;
}
module.exports = handle;