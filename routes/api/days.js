var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models/day')

router.get('/', function (req, res, next) {
  Day.findAll()
    .then(res.json.bind(res))
    .catch(next)
})

router.post('/', function (req, res, next) {
  Day.create({
    number: req.body.number
  })
    .then(res.json.bind(res))
    .catch(next)
})

router.route('/:id')
  .get(function (req, res, next) {
    Day.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    // Day.findOne({ where: { id: req.params.id } })
    //   .then(day => {
    //     return day.destroy()
    //   })
    Day.destroyById(Number(req.params.id))
      .then((deletedDay) => {
        res.send(deletedDay) //FIXME: remove after debug
        // res.sendStatus(204)
      })
      .catch(next)
  })

router.route('/:id/hotels')
  .get(function (req, res, next) {
    Day.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    Day.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })

router.route('/:id/restaurants')
  .get(function (req, res, next) {
    Day.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    Day.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })

router.route('/:id/activities')
  .get(function (req, res, next) {
    Day.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    Day.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })


module.exports = router;
