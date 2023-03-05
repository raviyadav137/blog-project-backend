const express = require('express');
const fitnessApi = require('../api/Fitness');

const fitness = express.Router();
fitness.route('/fitness').get(fitnessApi.apiController);

module.exports= fitness;