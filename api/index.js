const express = require("express");
const bodyParser = require("body-parser");
const config = require("../config.js");
const employee = require("./components/employee/network");
const app = express();
const server = require("http").Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/employees", employee);
// app.use(errors);
server.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto", config.api.port);
});
