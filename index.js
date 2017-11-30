const Sequelize = require('sequelize');

//TODO: pass to login to db to config.json, import + hash function?
const sequelize = new Sequelize('WOLSKLEP', 'wolniak', 'wolniak', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    port: 51808
  }
});

//Models of tables in WOOLSKLEP database
// TODO: to other file and import
const Sprzet = sequelize.define('SPRZET',{
  IdSprzetu: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Marka: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Model: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Typ: {
    type: Sequelize.STRING,
    allowNull: true
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

// work with tables
sequelize.sync().then(function(){
  // print all rows in SPRZET
  Sprzet.findAll().then(function(sprzet){
    for(let i = 0; i < sprzet.length; i++){
      console.log(sprzet[i].dataValues);
    }
  });

  // create row
  Sprzet.create({
    IdSprzetu: 2,
    Marka: 'Linksys',
    Model: 'WRT54G',
    Typ: 'Router',
    PN: 0,
    SN: 0,
    Uwagi: '2 anteny, 4x LAN, WiFi'
  });

  // Modify row with ID = 1
  Sprzet.findById(1).then(function(sprzet){
    sprzet.update({
      PN: 1
    })
  })

  //Create row with ID = 3, print actually state of rows and drop latest made row
  Sprzet.create({
    IdSprzetu: 3,
    Marka: 'DoUsuniecia',
    Model: 'DoUsuniecia',
    Typ: 'DoUsuniecia',
    PN: 0,
    SN: 0,
    Uwagi: 'DoUsuniecia'
  });

  Sprzet.findAll().then(function(sprzet){
    for(let  i = 0; i<sprzet.length; i++){
          console.log(sprzet[i].dataValues);
    }
  });
  Sprzet.findById(3).then(function(sprzet){
    sprzet.destroy({});
  })
});
