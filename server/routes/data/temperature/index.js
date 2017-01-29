var router = require('express').Router();
var db = require('../../database/_db');

// Returns all temperature data in database
router.get('/', function(req, res, next) {
  // Using Sequelize findAll, query database for all temperature data
})

// Get temperature reading with id 'id'
router.get('/:id', function(req, res, next) {

})

// Return all instances where temperature was greater than (gt) 'num'
router.get('/gt/:num', function(req, res, next) {
  // Using Sequelize, query database for all records where temperature > 'num'
})

// Return all instances where temperature was less than (lt) 'num'
router.get('/lt/:num', function(req, res, next) {
  // Using Sequelize, query database for all records where temperature < 'num'
})

// Return all instances where temperature was equal to (eq) 'num'
router.get('/eq/:num', function(req, res, next) {
  // Using Sequelize, query database for all records where temperature == 'num'
})

// Return temperature reading from a given timestamp, 'time'
router.get('/time/:time', function(req, res, next) {
  // Using Sequelize, query database for record with timestamp 'time'
})

// Write a new temperature reading to the database
router.post('/:time/:val', function(req, res, next) {
  // Using Sequelize, write a new temperature reading to the database with timestamp 'time' and value 'val'
})


module.exports = router;
