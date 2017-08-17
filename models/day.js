/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');


var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    unique: true,
  }
});


module.exports = Day;
