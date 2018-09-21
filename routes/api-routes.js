// import files
// var express = require('express');
// var burger = require('../models/burger.js');

// var router = express.Router();

var db = require("../models");

// 
// Set up Routes
// 
module.exports = function(app){


app.get("/", function(req, res) {
    console.log('this route is getting hit');
    db.Burger.findAll({}).
     then(function(results) {
       res.render("index", {burgers:results});
     }
    );
});

app.post("/api/burgers", function(req, res) {
    db.Burger.create({
    burger_name:req.body.burger_name , 
    devoured: req.body.devoured
  }).then(function(results) {
    // Send back the ID of the burger
    res.json(results);
  });
});


// PUT route for updating the burger list
app.put("/api/burgers/:id", function(req, res) {

   db.Burger.update({
    devoured: req.body.devoured
  },{
    where: {
      id: req.params.id
    }
  }).then(function(results) {
    res.json(results);
  });
});

};