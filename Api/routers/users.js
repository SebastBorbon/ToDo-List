const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (e) {
    console.log(e);
  }
});

exports.router = router;
