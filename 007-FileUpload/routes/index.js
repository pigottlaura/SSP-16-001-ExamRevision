var express = require('express');
var router = express.Router();

var allFiles = [];

router.get('/', function (req, res, next) {
  res.render('index', {files: allFiles});
});

router.post("/uploadFile", function (req, res, next) {
  console.log("File uploaded - " + req.files[0].filename);
  
  if (req.files.length > 0) {
      var newFile = {
        filename: req.files[0].originalname,
        path: req.files[0].path.split("public")[1],
        mimetype: req.files[0].mimetype
      }
      allFiles.push(newFile);
  }
  res.redirect("/");
});

module.exports = router;
