var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const dbConnection = require('../dbConnection');
const defineSprzet = require('../defineTables');

//connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOLSKLEP database
const Sprzet = defineSprzet.Sprzet;

router.get('/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - edycja.js');
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      res.json(sprzet);
    // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
 });

router.put('/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - edycja.js');
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      sprzet.update(req.body);
      res.json(sprzet);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
});

router.delete('/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - edycja.js');
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      sprzet.destroy({force: true});
      res.json(req.body);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
});

module.exports = router;