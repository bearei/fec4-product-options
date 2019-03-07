const config = require('../knexfile');

const env = 'development';
const knex = require('knex')(config[env]);

// gueries go in here

const getProduct = itemId => {
  console.log('accessing mariadb..');

  return knex
    .select(
      'brand',
      'title',
      'averageRating',
      'reviewCount',
      'freeShipping',
      'shippingRestriction',
      'price',
      'color',
      'size'
    )
    .from('products')
    .innerJoin('variants', 'products.itemId', 'variants.itemId')
    .where('products.itemId', itemId)
    .then(product => {
      return product;
    });
};

const createProduct = product => {
  const productDetails = {
    brand: product.brand,
    title: product.title,
    averageRating: product.averageRating,
    reviewCount: product.reviewCount,
    freeShipping: product.freeShipping,
    shippingRestriction: product.shippingRestriction
  };

  console.log(productDetails);

  return knex('products')
    .insert(productDetails)
    .then(result => {
      console.log('updated db with new product');
      return result;
    });
};

const updateProduct = productInfo => {
  console.log(productInfo);
  return;
};

module.exports = knex;
module.exports = { getProduct, createProduct, updateProduct };

//SELECT brand, title, averageRating, reviewCount, freeShipping,
// shippingRestriction, price, color, size FROM products p INNER JOIN
// variants v ON p.itemId = v.itemId WHERE p.itemId = 9799999;
