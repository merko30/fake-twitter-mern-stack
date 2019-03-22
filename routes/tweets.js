const express = require("express");
const router = express.Router();
const passport = require("passport");

const { getAll, addTweet } = require("../controllers/tweets");

router
  .route("/")
  .get(getAll)
  .post(passport.authenticate("jwt", { session: false }), addTweet);

module.exports = router;
