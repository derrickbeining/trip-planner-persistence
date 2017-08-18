/* eslint-disable camelcase */
var Promise = require('bluebird');
var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');


var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  }
});

Day.hook('afterDestroy', (destroyedDay) => {
  Day.findAll({
    where: { number: { $gt: destroyedDay.number } }
  })
    .then(days => {
      // return days.forEach(decrementBy1) // FIXME: remove if working without ti
      return safeDecrementEachBy1(days)
    })
    .catch(console.error.bind(console))
})

Day.destroyById = function (id) { //FIXME: need to get this working
  return Day.findById(id)
    .then(day => {
      const copy = JSON.parse(JSON.stringify(day))
      day.destroy()
      return copy
    })
    .catch(console.error.bind(console))
}

function decrementBy1 (day) {
  const pre = day.number
  // return day.decrement('number', { by: 1 }) //FIXME: original, keep this
  return day.decrement('number', { by: 1 })
    .then((day) => {
      const post = day.number
      console.log('Day ' + pre + ' is now ' + post);
    })
    .catch(console.error.bind(console))
}

function safeDecrementEachBy1 (days, idx) {
  idx = idx || 0
  if (idx >= days.length) return
  return decrementBy1(days[ idx ])
    .then(() => {
      return safeDecrementEachBy1(days, idx + 1)
    })
    .catch(console.error.bind(console))
}

module.exports = Day;
