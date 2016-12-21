var express = require('express');
var router = express.Router();

// 聊天窗口
router.get('/',function(req,res,next){
    res.render('chat/index.html',{user:req.user.username});
});

module.exports = router;