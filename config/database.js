const mongoose = require("mongoose");

module.exports = async url => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
