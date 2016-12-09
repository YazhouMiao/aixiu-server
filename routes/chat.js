var express = require('express');
var router = express.Router();

// 聊天窗口
router.get('/',function(req,res,next){
    res.render('chat/index.html');
});

module.exports = router;