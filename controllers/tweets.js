const Tweet = require("../models/tweet");
const User = require("../models/user");

const getAll = (req, res, next) => {
  Tweet.find({})
    .populate("author")
    .sort({ createdAt: -1 })
    .exec((error, tweets) => {
      if (error) {
        next(error);
      }
      res.json({ tweets });
    });
};

const addTweet = (req, res, next) => {
  const tweet = new Tweet({
    text: req.body.text,
    author: req.user.id
  });

  tweet.save((error, tweet) => {
    if (error) {
      next(error);
    } else {
      User.findById(req.user.id, (error, user) => {
        if (error) {
          next(error);
        }
        user.tweets.push(tweet);
        user.save(error => {
          if (error) {
            next(error);
          }
          res.json({ tweet });
        });
      });
    }
  });
};

module.exports = {
  getAll,
  addTweet
};
