var router = require('express').Router();
var dayModel = require('../../models/day')

router.get('/', function (req, res, next) {
  dayModel.findAll()
    .then(res.json.bind(res))
    .catch(next)
})

router.post('/', function(req, res, next){
  Day.create()
  .then()
  .catch(next)
})

router.route('/:id')
  .get(function (req, res, next) {
    dayModel.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    dayModel.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })



  router.route('/:id/hotels')
  .get(function (req, res, next) {
    dayModel.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    dayModel.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })

  router.route('/:id/restaurants')
  .get(function (req, res, next) {
    dayModel.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    dayModel.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })
  router.route('/:id/activities')
  .get(function (req, res, next) {
    dayModel.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete(function (req, res, next) {
    dayModel.destroy({
      where: {
        id: req.params.id
      }
    })
      .then() // comment - deleted
      .catch(next)
  })


module.exports = router;
