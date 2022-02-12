const express = require("express");
const router = express.Router();

const {
  getTaskFromUser,
  getAllTasks,
  createTasks,
  deleteTasks,
  updateTasks,
} = require("../controllers/tasks");

router.get("/", getTaskFromUser);

router.get("/all", getAllTasks);

router.post("/", createTasks);

router.delete("/:id", deleteTasks);

router.put("/", updateTasks);
exports.router = router;
