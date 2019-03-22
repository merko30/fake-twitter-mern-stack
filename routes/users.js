const express = require("express");
const router = express.Router();
const passport = require("passport");

const { register, currentUser, login } = require("../controllers/users");

router.post("/register", register);
router.post("/login", login);
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  currentUser
);

module.exports = router;
