const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route
router.get("/", authMiddleware("ADMIN"), getUsers);

module.exports = router;
