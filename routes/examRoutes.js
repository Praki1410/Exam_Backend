const express = require("express");
const {
  createNewExam,
  fetchAllExams,
  fetchExamById,
  modifyExam,
  removeExam,
} = require("../controllers/examController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware("ADMIN"), createNewExam);
router.put("/:id", authMiddleware("ADMIN"), modifyExam);
router.delete("/:id", authMiddleware("ADMIN"), removeExam);

router.get("/", authMiddleware(), fetchAllExams);
router.get("/:id", authMiddleware(), fetchExamById);

module.exports = router;
