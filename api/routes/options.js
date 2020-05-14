const express = require("express");
const router = express.Router();

const optionsController = require("../controllers/options");

// To update the options part: will require poll id I guess
router.delete("/:id/delete", optionsController.delete);

// To update the options part: will require poll id I guess
router.get("/:id/add_vote", optionsController.addVote);

module.exports = router;
