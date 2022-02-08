const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const authRoutes = require("./routers/auth").router;
const tasksRoutes = require("./routers/tasks").router;
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const usersRoutes = require("./routers/users").router;
=======
>>>>>>> Api-dev
>>>>>>> Stashed changes
const dotenv = require("dotenv");
dotenv.config();
require("./database.js");
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World ");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasksRoutes);
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
app.use("/api/users", usersRoutes);
=======
>>>>>>> Api-dev
>>>>>>> Stashed changes

app.listen(port, () => {
  console.log("server started at port 3000");
});
