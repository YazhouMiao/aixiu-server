var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.user(req.query,function(err,users){
    if(err)
      throw err;

    res.render('./users/users', {title:'users',users:users});
  })
});

/* insert test data */
router.get('/insert', function(req, res, next) {
    userModel.insetTestData(req.query.num,function(err,num){
      if(err)
        throw err;

      res.send(num+' test data added!');
    })
});

/* delete test data */
router.get('/delete', function(req, res, next) {
    userModel.deleteUser(req.query,function(err,result){
        if(err)
            throw err;

        res.send(result +result['n']+' test data added!');
    })
});

module.exports = router;
