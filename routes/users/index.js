const express = require('express');
const Route = express.Router();
const userController = require('../../controllers/user');

Route.post('/createuser', userController.createuser);

module.exports = Route