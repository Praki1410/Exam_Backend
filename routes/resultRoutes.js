const express = require("express");
const {
  createNewResult,
  fetchAllResults,
  fetchResultByStudent,
  removeResult,
} = require("../controllers/resultController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware("ADMIN"), createNewResult);
router.delete("/:id", authMiddleware("ADMIN"), removeResult);

router.get("/", authMiddleware("ADMIN"), fetchAllResults);
router.get("/:studentId", authMiddleware("STUDENT"), fetchResultByStudent);

module.exports = router;
