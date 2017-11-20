const sql = require('mssql');
const linq = require('linq');

let dbConfig  = {  //TODO: to JSON file and encrypt
  server : 'localhost\\WOLNIAK',
  database : 'WOLSKLEP',
  user  : 'wolniak',
  password : 'wolniak', //TODO: hash function
  port: 1433 //TODO: hash function
};

//container to data
let dataContainer;

//connect to database and download data
//TODO: to other file
function  testDb(){
  var conn = new sql.Connection(dbConfig);
  var req = new sql.Request(conn);

  conn.connect(function (err) { //TODO: lambda function
    if(err){
      console.log(err);
    }
    req.query("SELECT * FROM Sprzet", function (err, data) { //TODO: lambda function
      if(err){
        console.log(err);
      }
      else{
        dataContainer = data;
        //linq.js test query
        linq.from(dataContainer).select().log().toJoinedString();
      }
    })
    //TODO: req.query -> query sent new data to the database
  })
};

//invoke function which work with database
testDb();
