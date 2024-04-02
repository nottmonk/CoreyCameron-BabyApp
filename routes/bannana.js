var express = require("express");
var router = express.Router();

/* GET home page. */

const indexCtrl = require("../controllers/bannana");

router.get("/", indexCtrl.index);

module.exports = router;
