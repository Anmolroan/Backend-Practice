const express = require('express');
const app = express();
app.use(express.json());
const UserController = require('./controllers/user.controller');
app.use("/users",UserController)
module.exports=app;
 