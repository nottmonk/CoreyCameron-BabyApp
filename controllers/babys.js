const Baby = require("../models/baby");

const index = async (req, res) => {
  try {
    console.log("test");
    const allBabies = await Baby.find({});
    console.log(allBabies);
    res.render("baby/index", { errorMsg: "", allBabies: allBabies });
  } catch (err) {
    console.log(err);
  }
};

const newBaby = (req, res) => {
  res.render("baby/new", { errorMsg: "" });
};
const create = async (req, res) => {
  try {
    console.log(req.body);
    await Baby.create(req.body);
    res.redirect("/babies");
  } catch (err) {
    console.log(err);
    res.redirect("/babies");
  }
};

module.exports = {
  index,
  create,
  new: newBaby,
};
