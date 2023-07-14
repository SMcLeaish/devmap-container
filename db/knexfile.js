// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'devmap',
      user: 'postgres',
      password: 'docker',
      port: 5432,                   //I changed this from 5432 to 5433 to avoid a port conflict on my local machine.  
      host: '127.0.0.1'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'pg-docker',
      user: 'postgres',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
