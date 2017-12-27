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
    Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
      res.json(sprzet);
    })
  });

router.put('/:id', function(req, res, next) {
  Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
    sprzet.update(req.body);
    res.json(sprzet);
  })
});

router.delete('/:id', function(req, res, next) {
  Sprzet.findById(parseInt(req.params.id)).then((sprzet) => {
    sprzet.destroy({force: true});
    res.json(req.body);
  })
});

module.exports = router;