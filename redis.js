var redis = require('redis');
var redisConfig = require('./config').redis;

var rc = redis.createClient(redisConfig.port,redisConfig.host);

// 连接错误
rc.on('error',function(err){
    "use strict";
    console.log('redis connect error:'+err);
});
// rc.set('test','1');
// rc.expire('test',60);
//
// var bar = setInterval(function(){
//     rc.get('test',function(err,data){
//         console.log(data);
//         if(!data){
//             clearInterval(bar);
//         }
//     });
// },2000);