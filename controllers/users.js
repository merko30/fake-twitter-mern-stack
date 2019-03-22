const jwt = require("jsonwebtoken");

const User = require("../models/user");

const register = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    profilePhoto: req.body.profilePhoto
  });

  user.save((error, user) => {
    if (error) {
      next(error);
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      res.json({ user, token });
    }
  });
};

const login = (req, res, next) => {
  User.findOne({ username: req.body.username }, (error, user) => {
    if (error) {
      next(error);
    } else if (!user) {
      next(new Error("User not found"));
    } else if (user) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      res.json({ token, user });
    }
  });
};

const currentUser = (req, res, next) => {
  User.findById(req.user.id, (error, user) => {
    if (error) {
      next(error);
    }
    res.json({ user });
  });
};

module.exports = {
  register,
  login,
  currentUser
};
