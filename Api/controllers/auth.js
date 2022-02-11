const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CryptoJS = require("crypto-js");

const signUp = async (req, res) => {
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
    await newUser.save();
    res.status(201).json("user created!");
  } catch (err) {
    res.status(500).json("failed the signup");
    console.log(err);
  }
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, "es el user encontrado");
    if (!user)
      return (
        res.status(401).json("Wrong credentials"),
        console.log("fallo en encontrar user")
      );
    const hashedPwd = CryptoJS.AES.decrypt(user.password, process.env.SECRET, {
      expiresIn: "1d",
    });
    let ogPassword = hashedPwd.toString(CryptoJS.enc.Utf8);
    if (ogPassword !== req.body.password)
      return res.status(401).json("Wrong credentials");
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY
    );
    const { password, ...others } = user._doc;
    res.json({ ...others, token });
  } catch (err) {
    console.log(err);
    res.status(500).json("failed the login");
  }
};

module.exports = {
  signUp,
  login,
};
