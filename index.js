const Sequelize = require('sequelize');
const dbConnection = require('./dbConnection');
const defineSprzet = require('./defineTables');

//connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOOLSKLEP database
// TODO: Rest of table + new sprzet, update data, conditions of cohesion
const Sprzet = defineSprzet.Sprzet;

//function with return promise as collected data from database (value)
function findAllSprzet(){
  return new Promise(resolve => {
    Sprzet.findAll().then((sprzet) => {
        let sprzetArr = new Array(sprzet.length);
        for(let  i = 0; i<sprzet.length; i++){
              sprzetArr[i] = sprzet[i];
        }
        resolve(sprzetArr);
    })
    //TODO: number of error to enum;  rest of error services
    .catch(Sequelize.DatabaseError, err => {
      console.log(err);
      if(err.parent.number == 2627){
        console.log("\nPodane IdSprzetu juz istnieje w bazie!\n")
      }
      else if(err.parent.number == 245)
        console.log("\nPodana wartosc nie jest typu Int!\n")
      })
    .catch(Sequelize.ValidationError, err => {
      if(err.errors[0].type == 'notNull Violation'){
        console.log('\nPole nie moze byc null!\n');
      }
    });
  });
};

// authenticate in database, then (promise) call function,
//then (promise) close connection and print data
sequelize
.authenticate()
.then(async () => {
  console.log('Connection has been established successfully.');
  let sprzetAll = await findAllSprzet();
  sequelize
  .close()
  .then(() => {
    console.log('Connection has been close successfully.');
    // print data
    for(let i = 0; i < sprzetAll.length; i++){
      console.log(sprzetAll[i].dataValues);
    }
  })
  .catch(err => {
    console.error('Unable to close connection with the database:', err);
  });
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
