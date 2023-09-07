const express = require('express');
const Route= express.Router();
const transectionController = require('../../controllers/transaction')

Route.post('/debit',transectionController.debit);
module.exports = Route