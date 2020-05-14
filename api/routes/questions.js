const express = require("express");
const router = express.Router();

const questionsController = require("../../api/controllers/questions");

// To add a poll question
router.post("/create", questionsController.create);

// To add options to a specific question
router.post("/:id/options/create", questionsController.createOption);

// To delete a question
router.delete("/:id/delete", questionsController.delete);

// To fetch all polls
router.get("/", questionsController.fetch);

// To fetch all polls
router.get("/:id", questionsController.getOne);

module.exports = router;
