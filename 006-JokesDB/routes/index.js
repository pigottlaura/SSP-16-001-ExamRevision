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
  for(var i = 0; i < allJokes.length; i++)
  {
    if(req.params.jokeId == allJokes[i].id){
      allJokes.splice(i, 1);
    }
  }
  res.redirect("/");
});

module.exports = router;
