// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DB_MAIN,
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DB_MAIN,
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_MAIN,
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: process.env.DB_TEST,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
