// const mongoose = require('mongoose');

// const mongoUri = 'mongodb://localhost/hrei-product-options';

// mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
// const db = mongoose.connection;

// module.exports = db;

const mariadb = require('mariadb');
const knex = require('knex');
const config = require('../knexfile');

const env = 'development';
knex(config[env]);

module.exports = knex;

module.exports = {};
