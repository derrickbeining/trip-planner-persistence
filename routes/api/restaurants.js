var router = require('express').Router();
var restaurantModel = require('../../models/restaurant')

router.get('/', function (req, res, next) {
  restaurantModel.findAll()
    .then(res.json.bind(res))
    .catch(next)
})

module.exports = router;
