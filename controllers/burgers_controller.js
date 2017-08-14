const express = require("express");
const app = express();
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

const router = express.Router();

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data){
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var burgerName = req.body.name;
  db.Burger.create({
    burger_name:burgerName
  }).then(result => res.redirect("/"));
});

router.put("/:id", function(req, res) {
  db.Burger.update(
    {devoured:true},
    {where:
      {id: req.body.burger_id}
    }).then(result => res.redirect("/"));
});

module.exports = router;
