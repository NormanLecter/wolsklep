var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const dbConnection = require('../dbConnection');
const defineSprzet = require('../defineTables');

//connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOLSKLEP database
const Sprzet = defineSprzet.Sprzet;

router.post('/', function(req, res, next) {
  Sprzet.create(req.body);
  res.json(req.body);
});

module.exports = router;