const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    profilePhoto: {
      type: String,
      required: false
    },
    tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }]
  },
  { timestamps: true }
);

schema.pre("save", function(next) {
  const self = this;
  if (self.isNew) {
    user.find({ username: self.username }, (err, docs) => {
      if (docs.length === 0) {
        next();
      } else {
        const error = new Error();
        error.message = "User already exists";
        error.status = 401;
        return next(error);
      }
    });
  } else {
    next();
  }
});

const user = mongoose.model("User", schema);

module.exports = user;
