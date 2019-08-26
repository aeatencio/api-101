var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/', function(req, res, next) {
  models.example.findAll({
    attributes: ['name']
  }).then(function(examples) {
    res.send(examples);
  });
});

module.exports = router;
