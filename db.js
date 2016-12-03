var mongoose = require('mongoose');
var dbUrl = require('./config').dbUrl;

exports.connect = function () {
    mongoose.createConnection(dbUrl);
    console.log('db connected');
};

console.log('db connecting');