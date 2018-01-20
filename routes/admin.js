var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const dbConnection = require('../dbConnection');
const defineSprzet = require('../defineTables');
const fs = require('fs');
const dateFormat = require('dateformat');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Admin = require('../models/admin.js');
var Klient = require('../models/klient.js');

//connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOLSKLEP database
const Sprzet = defineSprzet.Sprzet;
const Sprzedaz = defineSprzet.Sprzedaz;
const Gwarancja = defineSprzet.Gwarancja;
const Wysylka = defineSprzet.Wysylka;
const Zamowienia = defineSprzet.Zamowienia;

router.post('/zaloguj/admin/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
    console.log('connection succesful - mongoDB admin.js');
    Admin.find(function (err, admin) {
      if (err){
        res.json(err);
      }
      else{
        let state = false;
        for(let i = 0; i < admin.length; i++){
          if(admin[i].Login == req.body.Login){
            if(admin[i].Haslo == req.body.Haslo){
              state = true;
              res.json(200);
            }
          }
        }
        if(state == false){
          res.json(404);
        }
      }
    });
  })
  .catch((err) => console.error(err));
});

router.post('/zaloguj/klient/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
    console.log('connection succesful - mongoDB admin.js');
    Klient.find(function (err, klient) {
      if (err){
        res.json(err);
      }
      else{
        let state = false;
        for(let i = 0; i < klient.length; i++){
          if(klient[i].Login == req.body.Login){
            if(klient[i].Haslo == req.body.Haslo){
              state = true;
              res.json(klient[i]);
            }
          }
        }
        if(state == false){
          res.json(404);
        }
      }
    });
  })
  .catch((err) => console.error(err));
});

router.get('/lista/administratorzy/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
    console.log('connection succesful - mongoDB admin.js');
    Admin.find(function (err, admin) {
      if (err){
        res.json(err);
      }
      else{
        res.json(admin);
      }
    });
  })
  .catch((err) => console.error(err));
});

router.get('/lista/klienci/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
    console.log('connection succesful - mongoDB admin.js');
    Klient.find(function (err, admin) {
      if (err){
        res.json(err);
      }
      else{
        res.json(admin);
      }
    });
  })
  .catch((err) => console.error(err));
});

router.post('/zarejestruj/admin/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  {
      console.log('connection succesful - mongoDB admin.js');
      Admin.create(req.body, function (err, post) {
        if (err){
            console.log('Error dodawanie admina, err: ' + err);
            res.json(err);
        }
        else{
          console.log('Admin został dodany poprawnie');
          res.json(post);
        }
        });
    })
    .catch((err) => console.error(err));
});

router.post('/zarejestruj/klient/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  {
      console.log('connection succesful - mongoDB admin.js');
      Klient.create(req.body, function (err, post) {
        if (err){
            console.log('Error dodawanie klienta, err: ' + err);
            res.json(err);
        }
        else{
          console.log('Klient został dodany poprawnie');
          res.json(post);
        }
        });
    })
    .catch((err) => console.error(err));
});

router.put('/klient/edytuj/:id', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
    console.log('connection succesful - mongoDB admin.js');
    Klient.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err){
          console.log('Error dodawanie klienta, err: ' + err);
          res.json(err);
      }
      else{
        console.log('Klient został dodany poprawnie');
        res.json(post);
      }
      });
  })
});

router.delete('/klient/usun/:id', function(req, res, next) {
  mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
    console.log('connection succesful - mongoDB admin.js');
    Klient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err){
        res.json(err);
      }
      else{
        res.json(post);
      }
    });
  })
  .catch((err) => console.error(err));
});

/**********************************************************************************/

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

router.get('/lista/wysylek/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - admin.js');
    Wysylka.findAll().then((wysylka) => {
      res.json(wysylka);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - admin.js, blad : ', err);
    //TODO: Info to user
  })
});

router.get('/lista/gwarancji/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - admin.js');
    Gwarancja.findAll().then((gwarancja) => {
      res.json(gwarancja);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - admin.js, blad : ', err);
    //TODO: Info to user
  })
});

router.get('/lista/zamowien/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - admin.js');
    Zamowienia.findAll().then((sprzet) => {
      res.json(sprzet);
      // TODO: Close connection?
    })
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - admin.js, blad : ', err);
    //TODO: Info to user
  })
});

router.post('/marki/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - admin.js');
      sequelize.query('EXEC raportMarki', {type: sequelize.QueryTypes.POST})
      .then(msg => {
        let dateNow = dateFormat(new Date(), 'dd-mm-yy hh:MM:ss', true);
        fs.writeFileSync('raportMarki.txt', 'Wykaz wszystkich MAREK dla bazy WOLSKLEP, stan na ' + dateNow + '\n\n');
        for(let i = 0; i < msg[0].length; i++){
          fs.appendFileSync('raportMarki.txt', 'Marka : ' + msg[0][i].Marka + ' | Ilosc : ' +  msg[0][i].Ilosc + '\n');
        }
        res.json(msg); 
      }).catch(err => {
        console.log(err)
        if(err.name == 'SequelizeDatabaseError'){
          res.json(err.parent.number);
        }
        else{
        res.json(err);
        }
    });
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - admin.js, blad  : ', err);
  })
});

router.post('/typy/', function(req, res, next) {
  sequelize.authenticate().then(() => {
    console.log('=> Polaczenie z baza ustanowione poprawnie - admin.js');
      sequelize.query('EXEC raportTypy', {type: sequelize.QueryTypes.POST})
      .then(msg => {
        let dateNow = dateFormat(new Date(), 'dd-mm-yy hh:MM:ss', true);
        fs.writeFileSync('raportTypy.txt', 'Wykaz wszystkich TYPÓW dla bazy WOLSKLEP, stan na ' + dateNow + '\n\n');
        for(let i = 0; i < msg[0].length; i++){
          fs.appendFileSync('raportTypy.txt', 'Marka : ' + msg[0][i].Typ + ' | Ilosc : ' +  msg[0][i].Ilosc + '\n');
        }
        res.json(msg); 
      }).catch(err => {
        console.log(err)
        if(err.name == 'SequelizeDatabaseError'){
          res.json(err.parent.number);
        }
        else{
        res.json(err);
        }
    });
  }).catch(err => {
    console.log('=> Nie mozna polaczyc sie z baza - admin.js, blad  : ', err);
  })
});

module.exports = router;

