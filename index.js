const Sequelize = require('sequelize');
const dbConnection = require('./dbConnection.js');
const defineTables = require('./defineTables.js');

// connection to the database
const sequelize = dbConnection.sequelize;

// Models of tables in WOLSKLEP database
// TODO: Rest of table, update data, conditions of cohesion
const Sprzet = defineTables.Sprzet;

// variable to check state of operations
let checkState = 1;

//function with return promise as collected data from database (value)
function addToSprzet(){
    Sprzet.create({
      //IdSprzetu is autoIncrement, TODO: fine works ???
      Marka: 'Tooomek',
      Model: 'Lol',
      Typ: 'Router',
      PN: 0,
      SN: 0,
      Uwagi: '4x LAN, 2x antena, WiFi'
    })
    //TODO: number of error to enum; rest of error services
    .catch(Sequelize.DatabaseError, err => {
      if(err.parent.number == 2627){
        console.log("\nPodane IdSprzetu juz istnieje w bazie!\n");
        checkState = 0;
      }
      else if(err.parent.number == 245)
        console.log("\nPodana wartosc nie jest typu Int!\n");
        checkState = 0;
      })
    .catch(Sequelize.ValidationError, err => {
      if(err.errors[0].type == 'Validation error'){
        //TODO:  Better service for Validation Error for each field
        console.log("Blad walidacji podczas dodawania sprzetu!");
        checkState = 0;
      }
      if(err.errors[0].type == 'notNull Violation'){
        console.log('\nPole nie moze byc null!\n');
        checkState = 0;
      }
    });
    Sprzet.findAll().then((sprzet) => {
    for(let  i = 0; i<sprzet.length; i++){
          console.log(sprzet[i]);
    }
    })
}

// sync table, authenticate in database, then (promise) call function,
//then (promise) close connection and print data
sequelize
.sync()
.then(() => {
  sequelize
  .authenticate()
  .then(async () => {
    console.log('Connection has been established successfully.');
    // TODO: use check with resolve/reject
    let check = await addToSprzet();
    sequelize
    .close()
    .then(() => {
      console.log('Connection has been close successfully.');
      if(checkState == 1){
        console.log('Data has been added successfully.');
    }
      else{
        console.log('Something goes wrong, data has not been added successfully.');
      }
    })
    .catch(err => {
      console.error('Unable to close connection with the database:', err);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
})
.catch(err => {
  console.error('Unable to sync with the database:', err);
});

// TODO: WARUNKI  SPOJNOSCI - BAZY DANYCH, RESZTA TABEL  +  VWALIDACJA,
// DO  KONCA  SERVER, STRONA GLOWNA - ADMIN, KLIENT, ZAMOW/KUP BEZ KONTA = (LOGOWANIE);
// PO ZALOGOWANIU WIDOK  NASTEPUJACY =>
// - ADMIN MOZE : TEST  OK, TEST FAIL, DODAJ NOWE, MODYFIKUJ - TRIGER/PROCEDUR
// - KLIENT MOZE : KUP lub ZAMOW INNE
// - GOSC  : KUP BEZ KONTA, ZAMOW BEZ KONTA  lub ZALOZ  KONTO
