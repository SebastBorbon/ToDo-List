const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const authRoutes = require("./routers/auth").router;
const dotenv = require("dotenv");
dotenv.config();
require("./database.js");
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World ");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log("server started at port 3000");
});
