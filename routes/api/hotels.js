var Promise = require('bluebird');
var router = require('express').Router();
var hotelModel = require('../../models/hotel')

router.get('/', function (req, res, next) {
  hotelModel.findAll()
    .then(res.json.bind(res))
    .catch(next)
})

module.exports = router;
