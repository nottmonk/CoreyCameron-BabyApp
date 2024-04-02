const index = async (req, res) => {
  try {
    res.render("index", { errorMsg: "" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
};
