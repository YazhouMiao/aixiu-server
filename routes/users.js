var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.userList(function(err,users){
    if(err)
      throw err;

    res.render('./users/users', {title: 'Route',app: 'New App',users:users});
  })
});

/* insert test data */
router.get('/insert', function(req, res, next) {
  userModel.insetTestData(100000,function(err){
    if(err)
      throw err;

    res.send('test added!');
  })
});

module.exports = router;
