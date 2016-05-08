var express = require('express');
var router = express.Router();

var mongoClient = require("mongodb").MongoClient;

var db;

function connectToDatabase() {
  mongoClient.connect("mongodb://localhost:27017/ExamRevision", function (err, connection) {
    if (err) {
      console.log("Could not connect to database - " + err);
      setTimeout(connectToDatabase, 2000);
    } else {
      console.log("Successfully connected to database");
      db = connection;
    }
  });
}

connectToDatabase();

var Joke = function (_id, _content) {
  this.id = _id;
  this.content = _content;
}

router.get('/', function (req, res, next) {
  db.collection("jokes").find().toArray(function (err, jokes) {
    res.render('index', { allJokes: jokes });
  });
});

router.post("/createJoke", function (req, res, next) {
  if (req.body.newJoke.length > 0) {
    var newJoke = new Joke(Date.now(), req.body.newJoke);
    
    db.collection("jokes").insertOne(newJoke, function (err, result) {
      if (err) {
        console.log("Could not insert new joke into database - " + err);
      } else {
        console.log("New joke successfully added to database - " + result);
      }
    });
  }
  res.redirect("/");
});

module.exports = router;
