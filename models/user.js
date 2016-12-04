// var mongoose = require('mongoose');
// var db = require('../db');

var mongoose = require('mongoose');
var dbUrl = require('../config').dbUrl;

// 连接数据库
mongoose.createConnection(dbUrl);

var Schema = mongoose.Schema;

// 定义user对象模型
var UserSchema = new Schema({
    name: String,
    age: Number,
    sex: Number,
    job: String,
    country: String
});

mongoose.model('user',UserSchema);

var User = mongoose.model('user');

exports.userList = function(callback) {
    User.find({},callback);
}