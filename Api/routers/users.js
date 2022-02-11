const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { get10Users, getAllUsers } = require("../controllers/users");

router.get("/", get10Users);

router.get("/all", getAllUsers);

exports.router = router;
