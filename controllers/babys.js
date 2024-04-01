const Baby = require("../models/baby");

const babyInfo = (req, res) => {
    res.render("views/babyindex", { errorMsg: "" });
  };
  const create = async (req, res) => {
    try {
        await Baby.create(req.body);
        res.redirect("/babyindex");
      } catch (err) {
        console.log(err);
        res.redirect("/babyindex");
      }
    }


    