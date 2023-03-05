const express = require('express');
const hollywoodApi = require('../api/Hollywood');

const hollywood = express.Router();
hollywood.route('/holly').get(hollywoodApi.apiController);

module.exports = hollywood;