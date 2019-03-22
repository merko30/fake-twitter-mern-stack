const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

schema.post("save", function(doc, next) {
  doc.populate("author").execPopulate(function() {
    next();
  });
});

module.exports = mongoose.model("Tweet", schema);
