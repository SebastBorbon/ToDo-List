const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const router = express.Router();

router.get("/signup", function (req, res) {
  res.send("Hello signup ");
});

router.post("/signup", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json("failed the signup");
    console.log(err);
  }
});

exports.router = router;
