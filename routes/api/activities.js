var Promise = require('bluebird');
var router = require('express').Router();
var activityModel = require('../../models/activity')

router.get('/', function (req, res, next) {
  activityModel.findAll()
    .then(res.json.bind(res))
    .catch(next)
})

module.exports = router;
