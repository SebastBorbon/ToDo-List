const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const {
  validationLogin,
  validationRegister,
} = require("../middlewares/validationAuth");

const signUp = async (req, res) => {
  const { error } = validationRegister.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
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
    res.status(201).json({ message: "user created" });
  } catch (err) {
    res.status(500).json({ message: "user already exists" });
    console.log(err);
  }
};

const login = async (req, res) => {
  console.log(req.body);
  const { error } = validationLogin.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  console.log(error);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ message: "Wrong credentials" });
    const hashedPwd = CryptoJS.AES.decrypt(user.password, process.env.SECRET, {
      expiresIn: "1d",
    });
    let ogPassword = hashedPwd.toString(CryptoJS.enc.Utf8);
    if (ogPassword !== req.body.password)
      return res.status(401).json({ message: "Wrong credentials" });
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY
    );
    const { password, ...others } = user._doc;
    res.status(201).json({ ...others, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Wrong credentials" });
  }
};

module.exports = {
  signUp,
  login,
};
