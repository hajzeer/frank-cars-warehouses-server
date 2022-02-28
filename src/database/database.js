/** @format */

const sqlite3 = require("sqlite3").verbose();

const DATABASE = "./database/warehouse.sqlite";

const db = new sqlite3.Database(DATABASE, (err) => {
  if (err) {
    //database doesn't work
    return console.log(err.message);
  } else {
    //database connected
    console.log("database successfully connected");
  }
});

module.exports = db;
