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
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - dodaj.js');
    Sprzet.create(req.body).then((msg) => {
      res.json(req.body);
    }).catch(err => {
     console.log("BLAD POST : " + err);
      if(err.name == 'SequelizeDatabaseError'){
      res.json(err.parent.number);
      }
      else if(err.name == 'SequelizeValidationError'){
        res.json(err.errors[0].path);
      }
      else{
        res.json(err);
      }
    });
    // TODO: Close connection?
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - dodaj.js, blad  : ', err);
    //TODO: Info to user
  })
});

// todo: other way to do with procedure
router.post('/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - dodaj.js');
    sequelize.query('EXEC dodajSprzetProcedura :idSprzetu, :marka, :model, :typ, :pn, :sn, :uwagi',
      {replacements : {idSprzetu : parseInt(req.body.IdSprzetu), marka : req.body.Marka, model : req.body.Model, typ : req.body.Typ, pn : req.body.PN, sn : req.body.SN, uwagi : req.body.Uwagi}, type: sequelize.QueryTypes.INSERT})
      .then(msg => {
        res.json(req.body);
      }).catch(err => {
        console.log("BLAD POST PROCEDURE : " + err);
        if(err.name == 'SequelizeDatabaseError'){
          res.json(err.parent.number);
          }
        else{
          res.json(err);
        }
      })
    // TODO: Close connection?
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - dodaj.js, blad  : ', err);
    //TODO: Info to user
  })
});

module.exports = router;