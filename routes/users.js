var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/aixiu');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./users/users', {title: 'Route',app: 'New App'});
});

module.exports = router;
