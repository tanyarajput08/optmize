const Task = require("../models/Task");
const Notification = require(
  "../models/Notification"
);

const createTask = async (req, res) => {

  try {

    const {
      title,
      description,
      priority,
      deadline,
      project
    } = req.body;

    const task = await Task.create({
      title,
      description,
      priority,
      deadline,
      project,
      createdBy: req.user.id
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("project", "title")
      .populate("assignedTo", "name");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

const updateTaskStatus = async (req, res) => {

  try {

    const task = await Task.findById(
      req.params.id
    );

    if (!task) {

      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.status = req.body.status;

    await task.save();

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task removed" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask
};