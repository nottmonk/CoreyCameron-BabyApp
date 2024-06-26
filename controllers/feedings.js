const Feeding = require("../models/feeding");
const Baby = require("../models/baby");
const feeding = require("../models/feeding");


const index = async (req, res) => {
  try {
    const feeding = await Feeding.find({});
    res.render("feeding/index", { errorMsg: "", feeding: feeding });
  } catch (err) {
    console.log(err);
  }
};

const newFeeding = async (req, res) => {
  const baby = await Baby.findById(req.params.babyid);
  res.render("feeding/new", { babyid: req.params.babyid, baby });
};

const create = async (req, res) => {
  try {
    req.body.baby = req.params.babyid;
    await Feeding.create(req.body);
    res.redirect('/babies', );
  } catch (err) {
    console.log(err);
  }
};

const newFed = async (req, res) => {
  const baby = await Baby.findById(req.params.babyid);
  try {
    const feeding = await Feeding.find({ baby: req.params.babyid });
    res.render("feeding/index", { babyid: req.params.babyid, baby, feeding });
  } catch (err) {
    console.log(err);
  }
};
const deleteFed = async (req, res) => {
  try {
    await Feeding.deleteOne({_id:req.params.feedid});
    res.redirect(`/feed/babyid/${req.params.babyid}`  )
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  deleteFed,
  newFed,
  new: newFeeding,
  create,
  index,
};
