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
exports.user = function(condition={},callback) {
    console.log(condition);

    let queryCon = {};
    // 姓名
    if(condition.name!==undefined){
        queryCon.name = condition.name;
    }
    // 性别
    if(condition.sex!==undefined){
        queryCon.sex = condition.sex;
    }
    // 年龄
    if(condition.age!==undefined){
        queryCon.age = condition.age;
    }

    User.find(queryCon,callback);
}

// 插入测试数据
function insetTestData(num,callback) {
    num = num || 1000;

    for(let i=0;i<num;i++){
        let user = new User({
            name: 'name'+num,
            age: num%60,
            sex: num%2,
            job: 'job'+num,
            country: 'contry'+num,
        });

        user.save(callback);
    }
}

exports.insetTestData = insetTestData;