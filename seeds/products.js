const { handleProductCSV, handleVariantCSV } = require('./generateCSVs');
const {} = require('./generateCSVs');
const fs = require('fs');
const path = require('path');

exports.seed = (knex, Promise) => {
  return knex('variants')
    .del()
    .then(() => {
      knex('products').del();
    })
    .then(() => {
      const data = handleProductCSV();
      return knex('products').insert(data);
    })
    .then(() => {
      const data = handleVariantCSV();
      return knex('variants').insert(data);
    })
    .catch(err => {
      console.log('Error', err);
    });
};
