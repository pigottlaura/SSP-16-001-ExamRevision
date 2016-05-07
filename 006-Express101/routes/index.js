var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res, next) {
  res.render('hello', { name: req.query.name, age: req.query.age });
});

router.get('/name', function (req, res, next) {
  res.render('name');
});

router.post('/name', function (req, res, next) {
  res.render('name', { yourName: req.body.yourName, yourSecret: req.body.yourSecret });
});

module.exports = router;