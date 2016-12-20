/*
 * 一对一聊天
 */
var chat = {};
chat.message = 'chat message';
chat.handle = function(msg){
    console.log('message: ' + msg);

    this.emit('chat message', {msg: 'hello'});
}

module.exports = chat;