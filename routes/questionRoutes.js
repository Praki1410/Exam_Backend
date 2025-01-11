const express = require("express");
const {
  createNewQuestion,
  fetchAllQuestions,
  fetchQuestionsByTitle,
  modifyQuestion,
  removeQuestion,
} = require("../controllers/questionController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", authMiddleware('ADMIN'), createNewQuestion);


router.get("/", authMiddleware(),fetchAllQuestions);


router.get("/:title", fetchQuestionsByTitle);

router.put("/:id", authMiddleware('ADMIN'), modifyQuestion);


router.delete("/:id", authMiddleware('ADMIN'), removeQuestion);

module.exports = router;
