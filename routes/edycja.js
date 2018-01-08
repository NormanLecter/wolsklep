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
      sprzet.update(req.body).then(msg => {
        res.json(req.body);
      }).catch(err => {
        console.log("BLAD PUT : " + err);
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
      console.log("Finding by ID, ERROR: " + err);
      req.json(err);
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
});

// todo: other way to do with procedure
router.put('/1/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - edycja.js');
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      sequelize.query('EXEC edycjaSprzetProcedura :idSprzetu, :marka, :model, :typ, :pn, :sn, :uwagi',
      {replacements : {idSprzetu : parseInt(req.body.IdSprzetu), marka : req.body.Marka, model : req.body.Model, typ : req.body.Typ, pn : req.body.PN, sn : req.body.SN, uwagi : req.body.Uwagi}, type: sequelize.QueryTypes.UPDATE})
      .then(msg => {
        res.json(req.body);
      }).catch(err => {     
        if(err.name == 'SequelizeDatabaseError'){
          res.json(err.parent.number);
        }
       else{
        res.json(err);
       }
      });
      // TODO: Close connection?
    }).catch(err => {
      if(err.name == 'SequelizeDatabaseError'){
        res.json(err.parent.number);
      }
      else{
      res.json(err);
      }
    });
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
});

router.delete('/1/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - edycja.js');
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      sequelize.query('EXEC usunSprzetProc :idSprzetu',
      {replacements : {idSprzetu : parseInt(req.params.id)}, type: sequelize.QueryTypes.DELETE})
      .then(msg => {
        res.json(req.body); 
      }).catch(err => {
        if(err.name == 'SequelizeDatabaseError'){
          res.json(err.parent.number);
        }
        else{
        res.json(err);
        }
    }).catch(err => {
      console.log("BLAD Finding by ID, ERROR : " + err);
        res.json(err);
    });
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
});
});

router.delete('/:id', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - edycja.js');
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      sprzet.destroy({force: true});
      res.json(req.body);
      // TODO: Close connection?
    });
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - edycja.js, blad  : ', err);
  })
});

module.exports = router;