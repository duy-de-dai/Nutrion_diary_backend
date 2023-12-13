// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'nutrition_app',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/src/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/src/knex/seeds'
    }
  }
};
