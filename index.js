var sql = require('mssql');

var dbConfig  = {
  server : 'localhost\\WOLNIAK',
  database : 'NORTHWND',
  user  : 'wolniak', //TODO: hash function
  password : 'wolniak', //TODO: hash function
  port: 1433 //TODO: hash function
};

function  testDb(){
  var conn = new sql.Connection(dbConfig);
  var req = new sql.Request(conn);

  conn.connect(function (err) { //TODO: lambda function
    if(err){
      console.log(err);
    }
    req.query("SELECT * FROM Customers", function (err, data) { //TODO: LAMBDA FUNCTION
      if(err){
        console.log(err);
      }
      else{
        console.log(data);
      }

    })
  })
};

testDb();
