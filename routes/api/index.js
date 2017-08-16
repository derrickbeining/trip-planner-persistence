var Promise = require('bluebird');
var router = require('express').Router();
var apiActivities = require('./activities.js');
var apiRestaurants = require('./restaurants.js');
var apiHotels = require('./hotels.js');



router.use('/activities', apiActivities)
router.use('/restaurants', apiRestaurants)
router.use('/hotels', apiHotels )

module.exports = router;
