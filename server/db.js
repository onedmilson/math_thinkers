const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DBNAME,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
  });

  module.exports = pool