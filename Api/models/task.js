const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: "por hacer",
  },
  endDate: {
    type: String,
    default: "",
  },
  accepted: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema, "task");

module.exports = Task;
