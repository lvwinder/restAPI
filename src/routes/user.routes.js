const { Router } = require('express')
const { createUser } = require('../controllers/user.controllers');
const { getOneUser } = require('../controllers/user.controllers');
const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.get("/users/:username", getOneUser); 
// http://localhost:5000/users/AndyB

module.exports = userRouter;



