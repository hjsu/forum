// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DB_MAIN
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
  }

};
