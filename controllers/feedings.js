const Feeding = require("../models/feeding");
const Baby = require('../models/baby')
const index = async (req, res) => {
    try {
        const feeding = await Feeding.find({});
        res.render('feeding/index', {errorMsg: "", feeding: feeding})
    } catch(err){
        console.log(err)
    }
}

const newFeeding = async (req, res) =>{
    const baby = await Baby.findById(req.params.babyid) 
    res.render('feeding/new', {babyid: req.params.babyid, baby}
    )

}

const create = async (req, res) => {
    try {
        req.body.baby = req.params.babyid
        await Feeding.create(req.body)
        res.redirect('/babies')
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    new: newFeeding,
    create,
    index
}