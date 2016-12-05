// var mongoose = require('mongoose');
// var db = require('../db');

var mongoose = require('mongoose');
var dbConfig = require('../config').db;

// 连接数据库
var opt = {
    user: dbConfig.user,
    pass: dbConfig.pwd,
    auth: {
        authdb: 'aixiu'
    }
};
var conn = mongoose.createConnection(dbConfig.host,'aixiu',dbConfig.port,opt);

var Schema = mongoose.Schema;

// 定义user对象模型
var UserSchema = new Schema({
    name: String,
    age: Number,
    sex: Number,
    job: String,
    country: String
}, { collection: "user" });

var User = conn.model('User',UserSchema);

// 获取用户列表
exports.userList = function(callback) {
    console.log('finding');
    User.find({},callback);
}

// 插入测试数据
exports.insetTestData = function (nums,callback) {
    nums = nums || 10000;
    for(let i=0;i<nums;i++){
        let user = new User({
            name: 'name'+i,
            age: i%60,
            sex: i%2,
            job: 'job'+i,
            country: 'contry'+i,
        });

        user.save(callback);
    }
}