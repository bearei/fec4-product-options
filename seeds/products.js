const seedFile = require('knex-seed-file');

exports.seed = (knex, Promise) => {
  return knex('variants')
    .del()
    .then(() => {
      knex('products').del();
    })
    .then(() => {
      for (let i = 1; i < 11; i++) {
        const pathway = path.join(__dirname, `/productData/productData${i}.csv`);
        seedFile(knex, pathway, 'products', [
          'brand',
          'title',
          'averageRating',
          'reviewCount',
          'freeShipping',
          'shippingRestriction'
        ]);
      }
    })
    .then(() => {
      for (let i = 1; i < 31; i++) {
        const pathway = path.join(__dirname, `/variantData/variantData${i}.csv`);
        seedFile(knex, pathway, 'variants', ['itemId', 'price', 'color', 'size']);
      }
    })
    .catch(err => {
      console.log('Error', err);
    });
};
