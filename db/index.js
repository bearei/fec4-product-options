const knex = require('knex');
const config = require('../knexfile');

const env = 'development';
knex(config[env]);

module.exports = knex;
