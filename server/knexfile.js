const path = require("path");

// Update with your config settings.
require('dotenv').config('.env')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_IP,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_TEST_IP,
      port: process.env.DB_TEST_PORT,
      database: process.env.DB_TEST_DATABASE,
      user: process.env.DB_TEST_USER,
      password: process.env.DB_TEST_PASSWORD
    },
    migrations: {
      directory: path.join(__dirname, "migrations")
    },
    seeds: {
      directory: path.join(__dirname, "seeds")
    }
  }

};
