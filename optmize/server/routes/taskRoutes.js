const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTaskStatus
} = require("../controllers/taskController");

router.get("/", protect, getTasks);

router.post("/", protect, createTask);

router.put(
  "/:id/status",
  protect,
  updateTaskStatus
);

module.exports = router;