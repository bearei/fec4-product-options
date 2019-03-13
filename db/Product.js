const knex = require('knex');
const config = require('../knexfile');

const env = process.env.ENVIRONMENT || 'development';
knex(config[env]);

module.exports = knex;
