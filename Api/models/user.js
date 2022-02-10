const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    lastName: {
      require: true,
      type: String,
    },
    phone: {
      require: true,
      type: Number,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
