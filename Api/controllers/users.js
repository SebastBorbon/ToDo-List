const User = require("../models/user");

const get10Users = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  get10Users,
  getAllUsers,
};
