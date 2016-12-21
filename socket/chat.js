/*
 * 一对一聊天
 */
var chat = {};
chat.message = 'chat message';
chat.handle = function(from,to,msg){
    console.log('message: ' + msg.user);

    this.emit('chat message', {msg: 'hello'});
}

module.exports = chat;