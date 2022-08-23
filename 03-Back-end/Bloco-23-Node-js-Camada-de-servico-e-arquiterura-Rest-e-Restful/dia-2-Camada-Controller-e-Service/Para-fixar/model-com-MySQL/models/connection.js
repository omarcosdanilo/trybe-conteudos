const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'mM789456123365*',
  host: 'localhost',
  port: 3306,
  database: 'model_example'
})

module.exports = connection;