const Sequelize = require('sequelize');

//TODO: pass to login to db to config.json, import + hash function?
const sequelize = new Sequelize('WOLSKLEP', 'wolniak', 'wolniak', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    port: 51808
  }
});

// test connection to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Models of tables in WOOLSKLEP database
// TODO: to other file and import + ZAKTUALIZUJ  W BAZIE
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
    Sprzet.create({
      IdSprzetu: 8,
      Model: 'WRT54G',
      Typ: 'Router',
      PN: 0,
      SN: 0,
      Uwagi: '2 anteny, 4x LAN, WiFi'
    })
//TODO: number of error to enum
.catch(Sequelize.DatabaseError, err => {
      console.log(err);
      if(err.parent.number == 2627){
        console.log("\nPodane IdSprzetu juz istnieje w bazie!\n")
      }
      else  if(err.parent.number == 245)
        console.log("\nPodana wartosc nie jest typu Int!\n")
    })
.catch(Sequelize.ValidationError, err => {
  if(err.errors[0].type == 'notNull Violation'){
    console.log('\nPole nie moze byc null!\n');
  }
});
