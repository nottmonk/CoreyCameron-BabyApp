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

const remove = async(req, res) => {
  try{
   await Baby.deleteOne({_id:req.params.babyid})
    res.redirect('/babies', )
  }catch(err){
    console.log(err)
  }
}






module.exports = {
  remove,
  index,
  create,
  new: newBaby,
};
