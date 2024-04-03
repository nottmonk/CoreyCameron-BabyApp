var express = require('express');
var router = express.Router();

/* GET home page. */



const babysCtrl = require("../controllers/babys");
const babys = require('../controllers/babys');

router.get("/", babysCtrl.index);
router.get("/new", babysCtrl.new )
router.post('/', babysCtrl.create)
router.delete('/babyid/:babyid', babysCtrl.remove)

// router.post("/", babysCtrl.create);

// router.get("/", babysCtrl.index);




module.exports = router;
