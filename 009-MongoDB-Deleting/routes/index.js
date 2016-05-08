var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;
var connectionString = process.env.CUSTOMCONNSTR_ExamRevision || "mongodb://localhost:27017/ExamRevision";
var db = null;

mongoClient.connect(connectionString, function (err, connection) {
  if (!err) {
    console.log("Successfully Connected to database");
    db = connection;
  }
});

router.get('/', function (req, res, next) {
  db.collection("shoppingList").find().toArray(function (err, shoppingListItems) {
    res.render('index', { shoppingList: shoppingListItems });
  });
});

router.post("/addNewListItem", function (req, res, next) {
  var newListItem = {
    title: req.body.listItem
  };

  db.collection("shoppingList").insertOne(newListItem, function (err, result) {

  });
  res.redirect("/");
});

router.get("/deleteItem/:itemId", function (req, res, next) {
  db.collection("shoppingList").remove({ _id: ObjectId(req.params.itemId) }, { w: 1 }, function (err, result) {
    if (!err) {
      console.log("Item removed from shopping list - " + result);
    }
  });
  res.redirect("/");
});

module.exports = router;
