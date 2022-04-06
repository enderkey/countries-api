require('dotenv').config();
const path = require('path');

module.exports = {
  client: 'mysql',

  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },

  migrations: {
    directory: path.join(__dirname, '/db/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '/db/seeds'),
  },
};
