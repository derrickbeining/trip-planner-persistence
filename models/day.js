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
},
  {
    afterDestroy: function (instance) {
      const destroyedNumber = instance.number
      Day.findAll({
        where: { number: { $gt: destroyedNumber } }
      })
        .then(days => {
          days.forEach(day => {
            day.decrement('number', { by: 1 })
          })
        })
        .catch(console.error.bind(console))
    }
  });


module.exports = Day;
