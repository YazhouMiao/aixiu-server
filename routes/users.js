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
  try{
    userModel.insetTestData(req.query.num || 1000,function(err){
      if(err)
        throw err;

      res.send('test added!');
    })
  }catch (err){
    res.send('add test data failed!');
  }

});

module.exports = router;
