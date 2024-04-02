var express = require('express');
var router = express.Router();
const feedCtrl = require("../controllers/feedings");


router.get('/:babyid/new', feedCtrl.new)
router.post('/:babyid/', feedCtrl.create)





module.exports = router