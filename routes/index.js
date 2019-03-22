const express = require("express");

const router = express.Router();

const tweets = require("./tweets");
const users = require("./users");

router.use("/tweets", tweets);
router.use("/auth", users);

module.exports = router;
