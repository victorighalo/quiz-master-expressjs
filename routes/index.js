var express = require('express');
var router = express.Router();
var path = require("path");
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// var mongo;
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   mongo = db;
//   console.log("Database created!");
//   db.close();
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname+'/../views/index.html') )
  res.json({some: 'Json'})
});

module.exports = router;
