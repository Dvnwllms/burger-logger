// Sets the connection requirement for mysql //
// Establishes the connection to the database and sets host, port, and users //
var app = require('../server');
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kungfutango1",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.log("error connecting: " + err.stack);
      return;
    }else{
    console.log("connected as id " + connection.threadId);
    }
  });



// Exports this file to be used by other sources //
module.exports = connection;