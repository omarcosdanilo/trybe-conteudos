const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'trybe',
  password: 'mM789456123365*',
  database: 'model_example'
})

module.exports = connection;