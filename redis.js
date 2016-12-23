var redis = require('redis');
var redisConfig = require('./config').redis;

var rc = redis.createClient(redisConfig.port,redisConfig.host);

// 连接错误
rc.on('error',function(err){
    "use strict";
    console.log('redis connect error:'+err);
});
rc.set('test','1',)