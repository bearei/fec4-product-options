// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '52.0.82.54',
      port: 3306,
      database: 'product_options',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
      // afterCreate: function(conn, done) {
      //   // in this example we use pg driver's connection API
      //   conn.query('SELECT * FROM products WHERE itemId = 1;', function(err) {
      //     if (err) {
      //       // first query failed, return error and don't try to make next query
      //       done(err, conn);
      //     }
      //   });
      // }
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '52.0.82.54',
      port: 3306,
      database: 'product_options',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
      // afterCreate: function(conn, done) {
      //   // in this example we use pg driver's connection API
      //   conn.query('SELECT * FROM products WHERE itemId = 1;', function(err) {
      //     if (err) {
      //       // first query failed, return error and don't try to make next query
      //       done(err, conn);
      //     }
      //   });
      // }
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '52.0.82.54',
      port: 3306,
      database: 'product_options',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
      // afterCreate: function(conn, done) {
      //   // in this example we use pg driver's connection API
      //   conn.query('SELECT * FROM products WHERE itemId = 1;', function(err) {
      //     if (err) {
      //       // first query failed, return error and don't try to make next query
      //       done(err, conn);
      //     }
      //   });
      // }
    }
  }
};
