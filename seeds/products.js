const fs = require('fs');
const path = require('path');

const faker = require('faker');

const generateFakeVariants = itemId => {
  const variants = [];
  const isUniqueColor = color => variants.every(variant => variant.color !== color);
  for (let i = 0; i < 4; i++) {
    const variant = {
      product_id: itemId,
      price: (Math.random() * 100).toFixed(2),
      color: faker.internet.color(),
      size: ['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)]
    };
    if (isUniqueColor(variant.color)) {
      variants.push(variant);
    }
  }
  return variants;
};

const generateFakeProduct = () => {
  // const id = Math.floor(Math.random() * 100);
  const fakeProduct = {
    brand: faker.commerce.productName().split(' ')[0],
    title: faker.commerce.productName(),
    averageRating: (Math.random() * 5).toFixed(1),
    reviewCount: Math.floor(Math.random() * 100),
    freeShipping: faker.random.boolean(),
    shippingRestriction: faker.random.boolean()
  };
  return fakeProduct;
};

exports.seed = (knex, Promise) => {
  return knex('variants')
    .del()
    .then(() => {
      knex('products').del();
    })
    .then(() => {
      const sampleProducts = [];

      for (let i = 0; i < 100; i++) {
        sampleProducts.push(generateFakeProduct());
      }

      // for csv files

      const productInJSONFormat = JSON.stringify(sampleProducts);
      const pathway = path.join(__dirname, `/productData/productData${1}.csv`);
      fs.writeFile(pathway, productInJSONFormat, err => {
        if (err) {
          throw 'error writing product data into file';
        } else {
          console.log('successfully wrote csv file');
        }
      });

      return knex('products').insert(sampleProducts);
    })
    .then(() => {
      return knex('products')
        .pluck('itemId')
        .then(itemIds => {
          const variants = [];
          for (let i = 0; i < itemIds.length; i++) {
            let itemId = itemIds[i];
            let variantList = generateFakeVariants(itemId);
            variants.push(variantList);
          }

          const flattenVariantList = [].concat.apply([], variants);

          const productInJSONFormat = JSON.stringify(flattenVariantList);
          const pathway = path.join(__dirname, `/variantData/variantData${1}.csv`);
          fs.writeFile(pathway, productInJSONFormat, err => {
            if (err) {
              throw 'error writing product data into file';
            } else {
              console.log('successfully wrote csv file');
            }
          });

          return knex('variants').insert(flattenVariantList);
        });
    });
};
