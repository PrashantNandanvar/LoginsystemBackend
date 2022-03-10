const mysql = require("mysql");
var db = mysql.createPool({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "M$p@1234",
  database: "dbexamples",
  connectionLimit: 10,
});

module.exports = db;
