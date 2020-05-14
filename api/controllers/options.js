const Poll = require("../../models/polling");

module.exports.delete = function (req, res) {
  const id = req.params.id;
  const question_id = "5ebd41265256b508787bf14c"; // either will be sending this through a post request, but for now not mentioned in the router
  Poll.findOneAndUpdate(
    { _id: question_id },
    { $pull: { options: { _id: id } } },
    function (err, update) {
      if (err) {
        return console.error(err.message);
      }
      return res.status(200).json({
        status: "success",
      });
    }
  );
};

module.exports.addVote = function (req, res) {
  const id = req.params.id;
  const question_id = "5ebd41265256b508787bf14c"; // either will be sending this through a post request, but for now not mentioned in the router
  Poll.findByIdAndUpdate(
    question_id,
    {
      $inc: { votes: 1, "options.$[opt].votes": 1 },
    },
    { arrayFilters: [{ "opt.id": id }] }
  ).then(function (update) {
    return res.status(200).json({
      status: "success",
    });
  });
};
