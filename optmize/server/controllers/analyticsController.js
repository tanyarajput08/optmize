const Task = require("../models/Task");

const Project = require("../models/Project");

const getAnalytics = async (req, res) => {

  try {

    const totalTasks =
      await Task.countDocuments();

    const completedTasks =
      await Task.countDocuments({
        status: "Completed"
      });

    const overdueTasks =
      await Task.countDocuments({
        deadline: {
          $lt: new Date()
        },
        status: {
          $ne: "Completed"
        }
      });

    const totalProjects =
      await Project.countDocuments();

    const productivity =
      totalTasks > 0
        ? (
            (completedTasks / totalTasks) *
            100
          ).toFixed(1)
        : 0;

    res.json({
      totalTasks,
      completedTasks,
      overdueTasks,
      totalProjects,
      productivity
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAnalytics
};