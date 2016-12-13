var mongoose = require('mongoose');
var dbConfig = require('./config').db;

// 连接数据库
var opt = {
    user: dbConfig.user,
    pass: dbConfig.pwd,
    auth: {
        authdb: 'aixiu'
    }
};

module.exports = mongoose.createConnection(dbConfig.host,'aixiu',dbConfig.port,opt);