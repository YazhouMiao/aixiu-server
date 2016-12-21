/*
 * 包含所有的socket处理逻辑
 * 所有加载的socket处理(obj)应该包含以下内容
 * obj.message：要监听的消息
 * obj.handle：处理内容
 */
var chat = require('./socket/chat');

function handle(socket){
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    var users = [];
    socket.on('new user',function(user){
        if(!(user in users)){
            users[user] = socket;
            console.log('new user:'+user);
        }
    });

    socket.on('message',function(from,to,msg){
        if(from in users){
            users[from].emit('message',from,msg);
        } else {
            socket.emit('system-message','Sorry,'+to+' is not online');
        }

        console.log(from+' to '+to+' '+msg);
    });

    //validCheck(chat);
    //socket.on(chat.message, chat.handle);
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