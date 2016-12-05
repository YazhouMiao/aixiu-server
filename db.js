var mongoose = require('mongoose');
var dbUrl = require('./config').dbUrl;

// 连接数据库
mongoose.createConnection(dbUrl);

console.log('connections:'+mongoose.connections.length);

module.exports = mongoose.connection;