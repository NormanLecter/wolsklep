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
const Gwarancja = defineSprzet.Gwarancja;
const Wysylka = defineSprzet.Wysylka;
const Zamowienia = defineSprzet.Zamowienia;

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

router.post('/wysylka/:id', function(req, res, next) {
  let tempIdSprzet = parseInt(req.params.id);
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - dodaj.js');
    Wysylka.create({
      Imie : req.body.Imie,
      Nazwisko : req.body.Nazwisko,
      Miasto : req.body.Miasto,
      Ulica : req.body.Ulica,
      NrDomu : req.body.NrDomu,
      NrMieszkania : req.body.NrMieszkania,
      KodPocztowy : req.body.KodPocztowy,
      NumerKontaktowy : req.body.NumerKontaktowy,
      SprzetIdSprzetu :  tempIdSprzet
    }).then((msg) => {
      res.json(msg);
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

router.post('/wysylka/procedura/:id', function(req, res, next) {
  let tempIdSprzet = parseInt(req.params.id);
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - dodaj.js');
    sequelize.query('EXEC potwierdzWysylkeProcedura :imie, :nazwisko, :miasto, :ulica, :nrdomu, :nrmieszkania, :kodpocztowy, :numerkontaktowy, :sprzetidsprzetu',
    {replacements : {imie : req.body.Imie, nazwisko : req.body.Nazwisko, miasto : req.body.Miasto, ulica : req.body.Ulica, nrdomu : req.body.NrDomu, nrmieszkania : req.body.NrMieszkania, kodpocztowy : req.body.KodPocztowy, numerkontaktowy : req.body.NumerKontaktowy, sprzetidsprzetu : tempIdSprzet}, type: sequelize.QueryTypes.INSERT})
    .then((msg) => {
      res.json(msg);
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

router.post('/nowe/zamowienie/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - dodaj.js');
    Zamowienia.create({
      Marka : req.body.Marka,
      Model : req.body.Model,
      Typ : req.body.Typ,
      SN : req.body.SN,
      PN : req.body.PN,
      Uwagi : req.body.Uwagi,
      NumerKontaktowy : req.body.NumerKontaktowy,
      AdresEmail  : req.body.AdresEmail
    }).then((msg) => {
      res.json(msg);
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
router.post('/nowe/zamowienie/procedura', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - dodaj.js');
    sequelize.query('EXEC zamowProcedura :Marka, :Model, :Typ, :PN, :PN, :Uwagi, :NumerKontaktowy, :AdresEmail',
      {replacements : {Marka : req.body.Marka, Model : req.body.Model, Typ : req.body.Typ, PN : req.body.PN, SN : req.body.SN, Uwagi : req.body.Uwagi, NumerKontaktowy : req.body.NumerKontaktowy, AdresEmail : req.body.AdresEmail}, type: sequelize.QueryTypes.INSERT})
      .then(msg => {
        res.json(msg);
      }).catch(err => {
        console.log("BLAD POST PROCEDURE ZAMOWIENIE, ERROR: " + err);
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