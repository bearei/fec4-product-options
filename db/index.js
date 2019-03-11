const config = require('../knexfile');

const env = 'development';
const knex = require('knex')(config[env]);

// gueries go in here

const getProduct = itemId => {
  return knex('products')
    .where('itemId', itemId)
    .then(product => {
      return product;
    });
};

const getVariants = itemId => {
  return knex('variants')
    .where('itemId', itemId)
    .then(variants => {
      return variants;
    });
};

///////

const createProduct = product => {
  const productDetails = {
    brand: product.brand,
    title: product.title,
    averageRating: product.averageRating,
    reviewCount: product.reviewCount,
    freeShipping: product.freeShipping,
    shippingRestriction: product.shippingRestriction
  };

  return knex('products')
    .insert(productDetails)
    .then(result => {
      return result;
    });
};

const updateProduct = (itemId, productInfo) => {
  return knex('products')
    .where('itemId', itemId)
    .update(productInfo)
    .then(result => {
      return result;
    });
};

const deleteProduct = itemId => {
  return knex('products')
    .where({ itemId: itemId })
    .del();
};

module.exports = knex;
module.exports = { getProduct, getVariants, createProduct, updateProduct, deleteProduct };

// SELECT brand, title, averageRating, reviewCount, freeShipping,
// shippingRestriction, price, color, size FROM products p INNER JOIN
// variants v ON p.itemId = v.itemId WHERE p.itemId = 9799999;

// return knex('products')
// .select([
//   'products.itemId',
//   'products.brand',
//   'products.title',
//   'products.averageRating',
//   'products.reviewCount',
//   'products.freeShipping',
//   'products.shippingRestriction',
//   'variants.variant_id',
//   'variants.price',
//   'variants.color',
//   'variants.size'
// ])
// .innerJoin('variants', 'products.itemId', 'variants.itemId')
// .where('products.itemId', itemId)
// .then(product => {
//   return product;
// });
