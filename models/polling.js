const mongoose = require("mongoose");

const poll = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  options: [
    {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      text: {
        type: String,
        required: true,
        unique: true,
      },
      votes: {
        type: Number,
        default: 0,
      },
      link_to_vote: {
        type: String,
        default: "",
      },
    },
  ],
});

const Poll = mongoose.model("Poll", poll);

module.exports = Poll;
