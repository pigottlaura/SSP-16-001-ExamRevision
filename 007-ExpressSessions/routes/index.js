var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login", function (req, res, next) {
  if (req.body.name.length > 0) {
    req.session.name = req.body.name;
    res.redirect("/hello");
  } else {
    res.redirect("/");
  }
});

router.get("/hello", function (req, res, next) {
  res.render("hello", { name: req.session.name });
});

router.get("/logout", function (req, res, next) {
  req.session.destroy();
  res.redirect("/");
});


module.exports = router;
