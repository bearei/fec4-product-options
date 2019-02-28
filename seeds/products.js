const { generateFakeProduct, generateFakeVariants } = require('../db/fakerCreators.js');
const fs = require('fs');
const path = require('path');

exports.seed = (knex, Promise) => {
  return knex('variants')
    .del()
    .then(() => {
      knex('products').del();
    })
    .then(() => {
      for (let i = 1; i < 11; i++) {
        var sampleProducts = [];
        for (let j = 0; j < 100; j++) {
          sampleProducts.push(generateFakeProduct());
        }

        const writeFileContent = (products, callback) => {
          const productInJSONFormat = JSON.stringify(products);
          const pathway = path.join(__dirname, `/productData/productData${i}.csv`);
          fs.writeFile(pathway, productInJSONFormat, err => {
            if (err) {
              throw 'error writing product data into file';
            } else {
              console.log('successfully wrote product csv file');
              callback();
            }
          });
        };

        const getFileContent = () => {
          const pathway = path.join(__dirname, `/productData/productData${i}.csv`);
          fs.readFile(pathway, 'utf8', (err, fileData) => {
            if (err) {
              throw 'error writing product data into file';
            }
            console.log('here');
            files = JSON.parse(fileData);
            knex('products').insert(files);
          });
        };
        // for (let n = 1; n < 11; n++) {

        // return;
        // }
        writeFileContent(sampleProducts, getFileContent);
      }
      return;

      // return knex('products').insert(sampleProducts);
    })
    .then(() => {
      return knex('products')
        .pluck('itemId')
        .then(itemIds => {
          console.log('here are the product ids---');
          console.log(itemIds);
          for (let i = 1; i < 31; i++) {
            var variants = [];
            for (let i = 0; i < itemIds.length; i++) {
              let itemId = itemIds[i];
              let variantList = generateFakeVariants(itemId);
              variants.push(variantList);
            }
            console.log('final variant list');
            console.log(variants);
            var flattenVariantList = [].concat.apply([], variants);
            const productInJSONFormat = JSON.stringify(flattenVariantList);
            const pathway = path.join(__dirname, `/variantData/variantData${i}.csv`);
            fs.writeFile(pathway, productInJSONFormat, err => {
              if (err) {
                throw 'error writing product data into file';
              } else {
                console.log('successfully wrote variant csv file');
              }
            });
          }

          for (let n = 1; n < 31; n++) {
            const pathway = path.join(__dirname, `/variantData/variantData${n}.csv`);
            fs.readFile(pathway, (err, fileData) => {
              if (err) {
                throw 'error writing product data into file';
              } else {
                files = JSON.parse(fileData);
                knex('variants').insert(files);
              }
            });
          }
          return;

          // return knex('variants').insert(flattenVariantList);
        });
    });
};
