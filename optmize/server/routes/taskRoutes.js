const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask
} = require("../controllers/taskController");

router.get("/", protect, getTasks);

router.post("/", protect, createTask);

router.put(
  "/:id/status",
  protect,
  updateTaskStatus
);

router.delete("/:id", protect, deleteTask);

module.exports = router;