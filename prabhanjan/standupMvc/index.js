const express = require('express');
const app = express();
app.use(express.json());
const studentController =require("./src/controllers/student.controller");
app.use("/students", studentController)
module.exports =app;