const express = require('express');
const bollywoodApi = require('../api/Bollywood');

const bollywood = express.Router();
bollywood.route('/bolly').get(bollywoodApi.apiController);

module.exports = bollywood;