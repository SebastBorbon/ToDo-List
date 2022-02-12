const mongoose = require("mongoose");

//I setup the info nedeed to connect with te database on mongo
const url = `mongodb://admin:admin@mongodb:27017/toDoDB`;
//para ejecutar la base de datos con npm start
const urlTest = "mongodb://admin:admin@localhost:27018/toDoDB";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
