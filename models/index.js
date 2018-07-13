var url = "mongodb://misterwyz:WISdom%401@ds135061.mlab.com:35061/quiz-master";
var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(url);
mongoose.PromiseProvider = Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

module.exports.Questions = require('./questions');