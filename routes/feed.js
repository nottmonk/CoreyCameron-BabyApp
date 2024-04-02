var express = require('express');
var router = express.Router();
const feedCtrl = require("../controllers/feedings");


router.get('/:babyid/new', feedCtrl.new)
router.post('/:babyid/', feedCtrl.create)
router.get('/babyid/:babyid', feedCtrl.newFed)





module.exports = router