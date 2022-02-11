const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.query.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = new Task({
      userId: req.body.user,
      title: req.body.title,
      description: req.body.description,
      endDate: req.body.date,
    });
    console.log("HEY");
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json("La tarea ha sido borrada");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json("failed on the authorization");
  }
});
exports.router = router;
