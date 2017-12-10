const Sequelize = require('sequelize');

//TODO: hash function?
exports.sequelize = new Sequelize('WOLSKLEP', 'wolniak', 'wolniak', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    port: 51808
  }
});
