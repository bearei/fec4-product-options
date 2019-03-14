// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '3.83.29.79',
      port: 3306,
      database: 'product_options',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: function(connection) {
        console.log('connected!!!!');
      }
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '3.83.29.79',
      port: 3306,
      database: 'product_options',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: function(connection) {
        console.log('connected!!!!');
      }
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '3.83.29.79',
      port: 3306,
      database: 'product_options',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: function(connection) {
        console.log('connected!!!!');
      }
    }
  }
};
