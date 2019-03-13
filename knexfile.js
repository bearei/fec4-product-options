// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '3.83.29.79',
      database: 'product_options',
      user: '',
      password: ''
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
      host: '3.83.29.79',
      database: 'product_options',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '3.83.29.79',
      database: 'product_options',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
