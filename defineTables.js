const Sequelize = require('sequelize');
const dbConnection = require('./dbConnection');

// connection to the database
const sequelize = dbConnection.sequelize;

// define tables
// TODO: Rest of table + new sprzet, update data, conditions of cohesion
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
    allowNull: true,
  },
  Typ: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  PN: {
    type: Sequelize.STRING,
    allowNull: true
  },
  SN: {
    type: Sequelize.STRING,
    allowNull: true
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
