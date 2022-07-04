const express = require('express'); 
const app = express();
app.use(express.json());
const {signup,signin} = require('./controllers/auth.controller');
const UserController = require('./controllers/user.controller')
app.post("/signup", signup);
app.post("/signin", signin);
app.use("/users", UserController)
module.exports =app;