var express = require('express');
var possport = require('passport');
var router = express.Router();
var User = require('../models/user');

/* 注册页面*/
router.get('/register',function (req, res, next) {
    res.render('./user/register',{title:'Login'});
});

/* 注册用户 */
router.post('/register',function (req, res, next) {
    console.log('a new user register');
    User.register(new User({username:req.body.username}),req.body.password,function(err){
        if(err){
            console.log('error while user register!', err);
            return next(err);
        }

        // 自动登陆
        possport.authenticate('local');
        res.redirect('/');
    });
});

/* 用户登陆页面 */
router.get('/login',function (req, res, next) {
    res.render('./user/login',{title:'Login'})
});

/* 用户登陆 */
router.post('/login',possport.authenticate('local') ,function (req, res, next) {
    res.redirect('/');
});

/* 退出登陆 */
router.get('/logout',function (req, res, next) {
    req.logout();
    res.redirect('/');
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.users(req.query,function(err,users){
    if(err)
      throw err;

    res.render('./user/users', {title:'users',users:users});
  })
});

/* insert test data */
router.get('/insert', function(req, res, next) {
    User.insetTestData(req.query.num,function(err,num){
      if(err)
        throw err;

      res.send(num+' test data added!');
    })
});

/* delete test data */
router.get('/delete', function(req, res, next) {
    User.deleteUser(req.query,function(err,result){
        if(err)
            throw err;

        res.send(result +result['n']+' test data added!');
    })
});

module.exports = router;
