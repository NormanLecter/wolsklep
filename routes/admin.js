var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const dbConnection = require('../dbConnection');
const defineSprzet = require('../defineTables');

//connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOLSKLEP database
const Sprzet = defineSprzet.Sprzet;

router.get('/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - admin.js');
    Sprzet.findAll().then((sprzet) => {
      res.json(sprzet);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - admin.js, blad : ', err);
    //TODO: Info to user
  })
});

module.exports = router;