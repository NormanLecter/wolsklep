var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const dbConnection = require('../dbConnection');
const defineSprzet = require('../defineTables');

//connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOLSKLEP database
const Sprzet = defineSprzet.Sprzet;
const Sprzedaz = defineSprzet.Sprzedaz;
const Klienci = defineSprzet.Klienci;
const Gwarancja = defineSprzet.Gwarancja;
const Wysylka = defineSprzet.Wysylka;
const Zakup = defineSprzet.Zakup;
const Zamowienia = defineSprzet.Zamowienia;

router.get('/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - klient.js');
    Sprzedaz.findAll().then((sprzet) => {
        res.json(sprzet);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - klient.js, blad : ', err);
    //TODO: Info to user
  })
});

module.exports = router;