const Sequelize = require('sequelize');
const dbConnection = require('./dbConnection.js');

// connection to the database
const sequelize = dbConnection.sequelize;

// model of SPRZET
exports.Sprzet = sequelize.define('SPRZET',{
  IdSprzetu: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique : true
  },
  Marka: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /^([A-Z0-9]+).*$/
    }
  },
  Model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /^([A-Z0-9]+).*$/
    }
  },
  Typ: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /^([A-Z]+).*$/
    }
  },
  PN: {
    type: Sequelize.STRING,
    allowNull: false
  },
  SN: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Uwagi: {
    type: Sequelize.STRING,
    allowNull: true
  }
},
{
  tableName: 'SPRZET',
  freezeTableName: true
}
);
