var express = require('express');
var router = express.Router();

var allJokes = new Array();

var Joke = function (_id, _content) {
  this.id = _id;
  this.content = _content;
}

router.get('/', function (req, res, next) {
  res.render('index', { allJokes: allJokes });
});

router.post("/createJoke", function (req, res, next) {
  if (req.body.newJoke.length > 0) {
    var newJoke = new Joke(Date.now(), req.body.newJoke);
    allJokes.push(newJoke);
  }
  res.redirect("/");
});

router.get("/deleteJoke/:jokeId", function (req, res, next) {
  getJoke(req.params.jokeId, function (jokeIndex) {
    allJokes.splice(jokeIndex, 1);
    res.redirect("/");
  });
});

router.get("/editJoke/:jokeId", function (req, res, next) {
  getJoke(req.params.jokeId, function (jokeIndex) {
    res.render("editJoke", { joke: allJokes[jokeIndex] });
  });
});

router.post("/updateJoke", function (req, res, next) {
  getJoke(req.body.editedJokeId, function (jokeIndex) {
    allJokes[jokeIndex].content = req.body.editedJoke;
    res.redirect("/");
  });
});

function getJoke(_id, cb) {
  var jokeIndex = -1;

  for (var i = 0; i < allJokes.length; i++) {
    if (_id == allJokes[i].id) {
      jokeIndex = i;
      break;
    }
  }

  cb(jokeIndex);
}

module.exports = router;
