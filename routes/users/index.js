const express = require('express');
const Route = express.Router();
const userController = require('../../controllers/user');

Route.post('/createuser', userController.createuser);
Route.get('/getusers',userController.getUsers);
Route.get('/getByName',userController.getByName);

module.exports = Route