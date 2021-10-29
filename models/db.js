const mysql = require("mysql2");
const dbConfig = require("../config/db.config");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) throw error.message;
  console.log(`connection successful to database : ${dbConfig.DB}`);
});
module.exports = connection;
