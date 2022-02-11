const Task = require("../models/task");

const getTaskFromUser = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.query.userId }).populate(
      "userId"
    );
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find().populate("userId");
    res.json(allTasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createTasks = async (req, res) => {
  try {
    const newTask = new Task({
      userId: req.body.user,
      title: req.body.title,
      description: req.body.description,
      endDate: req.body.date,
    });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteTasks = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user created" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTasks = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.query.id,
      {
        accepted: true,
      },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Failed Update" });
  }
};

module.exports = {
  getTaskFromUser,
  getAllTasks,
  createTasks,
  deleteTasks,
  updateTasks,
};
