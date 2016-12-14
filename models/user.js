var async = require('async');
var mongoose = require('mongoose');
var localMongoosePlugin = require('passport-local-mongoose');
var conn = require('../db');

// 定义user对象模型
var UserSchema = new mongoose.Schema({
    username: {type:String,unique:true},
    password: String,
    age: Number,
    sex: Number,
    birthday: Date,
    job: String,
    country: String
}, { collection: "user" });

// 使用登陆插件
UserSchema.plugin(localMongoosePlugin);

var User = conn.model('User',UserSchema);

// 获取用户列表
User.users = function(condition={},callback) {
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
User.insetTestData = function insetTestData(num,fn) {
    num = !isNaN(num) ? num : 1;

    User.count({},function (err, sum) {
        let counter = 0;

        async.whilst(function(){
            return counter < num;
        },function (callback) {
            counter++;
            let user = new User({
                name: 'name'+(counter+sum),
                age: (counter+sum)%60,
                sex: (counter+sum)%2,
                job: 'job'+(counter+sum),
                country: 'contry'+(counter+sum),
            });

            user.save();

            callback(null,counter);
        },function(err,counter){
            fn(err,counter);
        });
    });
}

// 删除测试数据
User.deleteUser = function(condition,callback){
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

    User.remove(queryCon,callback);
}

module.exports = User;