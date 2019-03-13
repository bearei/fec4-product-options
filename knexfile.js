// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '35.153.167.13',
      database: 'product_options',
      user: 'sudo su',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '35.153.167.13',
      database: 'product_options',
      user: 'sudo su',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '35.153.167.13',
      database: 'product_options',
      user: 'sudo su',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
