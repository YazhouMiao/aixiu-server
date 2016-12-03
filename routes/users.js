var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.connect();
  res.render('./users/users', {title: 'Route',app: 'New App'});
});

module.exports = router;
