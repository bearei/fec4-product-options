// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'product_options',
      user: 'root',
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
      database: 'product_options_staging',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'product_options'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: '',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'product_options'
    }
  }
};
