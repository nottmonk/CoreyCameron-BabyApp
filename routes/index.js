var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feeding Tracker' });
});

var express = require("express");
var router = express.Router();
const babysCtrl = require("../controllers/babys");

router.get("/babyindex", babysCtrl.new);

router.post("/", babysCtrl.create);

router.get("/", babysCtrl.index);




module.exports = router;
