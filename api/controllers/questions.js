const Poll = require("../../models/polling");

module.exports.create = (req, res) => {
  const options = req.body.options;
  if (options) {
    for (let i = 0; i < options.length; i++) {
      req.body.options[i][
        "link_to_vote"
      ] = `http://localhost:8000/api/options/${req.body.options[
        i
      ].id.trim()}/add_vote`;
    }
  }
  Poll.findOne({ id: req.body.id }, (err, poll) => {
    if (err) {
      console.log("Error in creating question", err);
      return;
    }
    if (!poll) {
      Poll.create(req.body, (err, poll) => {
        if (err) {
          console.log("Error after creating the question", err);
          return;
        }
      });
      res.status(200).json({
        message: "question created successfully",
      });
    } else {
      res.status(409).json({
        message: "question already exists.",
      });
    }
  });
};

module.exports.createOption = async function (req, res) {
  const id = req.params.id;
  const options = req.body;
  req.body[
    "link_to_vote"
  ] = `http://localhost:8000/api/options/${req.body.id.trim()}/add_vote`;
  await Poll.findByIdAndUpdate(id, { $push: { options } }, function (err, doc) {
    if (err) {
      return console.error(err.message);
    }
    return res.status(200).json({
      status: "success",
    });
  });
};

module.exports.delete = function (req, res) {
  const id = req.params.id;
  Poll.findByIdAndDelete(id, function (err, item) {
    if (err) {
      return console.error(err.message);
    }
    return res.status(200).json({
      status: "success",
      deletedItem: item,
    });
  });
};

module.exports.fetch = async function (req, res) {
  const all = await Poll.find({});
  return res.status(200).json({
    "All poll questions": all,
  });
};

module.exports.getOne = async function (req, res) {
  const id = req.params.id;
  await Poll.findById(id, function (err, data) {
    if (err) {
      return console.error(err.message);
    }
    return res.status(200).json({
      data,
    });
  });
};
