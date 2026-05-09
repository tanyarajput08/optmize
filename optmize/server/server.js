const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const notificationRoutes =
  require("./routes/notificationRoutes");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use(
  "/api/analytics",
  analyticsRoutes
);
app.use(
  "/api/notifications",
  notificationRoutes
);

app.get("/", (req, res) => {
  res.send("Optmize API Running");
});

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();