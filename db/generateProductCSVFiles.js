const utils = require('./utils');

console.time('datagen');

const num = 11;
utils.createProductFile(num);

console.timeEnd('datagen');

// ///
// const { generateFakeProduct, generateFakeVariants } = require('./fakerCreators');
// const fs = require('fs');
// const path = require('path');
// // const util = require('util');

// // const writeFile = util.promisify(fs.writeFile);

// const productFiles = [];
// const variantFiles = [];

// const handleProductCSV = () => {
//   for (let i = 1; i < 11; i++) {
//     var sampleProducts = [];
//     for (let j = 0; j < 100; j++) {
//       // 1,000 records
//       sampleProducts.push(generateFakeProduct());
//     }

//     const productInJSONFormat = JSON.stringify(sampleProducts);
//     const pathway = path.join(__dirname, `../seeds/productData/productData${i}.csv`);
//     productFiles.push(pathway);
//     writeFile(pathway, productInJSONFormat)
//       .then(() => console.log('file created successfully'))
//       .catch(err => console.log('Error', err));
//   }
// };

// const handleVariantCSV = () => {
//   // csv files
//   for (let i = 1; i < 31; i++) {
//     var itemCounter = 1;
//     var variants = [];
//     // records in one file
//     // 3,000 files / 1,000 =  3 variants per 1 products
//     for (let j = 1; j < 101; j++) {
//       // 3 variants per product
//       let variantList = generateFakeVariants(itemCounter);
//       variants.push(variantList);
//       if (j % 3 === 0) {
//         itemCounter++;
//       }
//     }
//     var flattenVariantList = [].concat.apply([], variants);
//     const productInJSONFormat = JSON.stringify(flattenVariantList);

//     const pathway = path.join(__dirname, `../seeds/variantData/variantData${i}.csv`);
//     variantFiles.push(pathway);
//     writeFile(pathway, productInJSONFormat)
//       .then(() => console.log('file created successfully'))
//       .catch(err => console.log('Error', err));
//   }
// };

// handleProductCSV();
// handleVariantCSV();
// module.exports = { variantFiles, productFiles };

/// seed/product.js
// const fs = require('fs');
// const path = require('path');
// const util = require('util');
// const readFile = util.promisify(fs.readFile);
// // const { variantFiles, productFiles } = require('../db/generateCSVs');

// exports.seed = (knex, Promise) => {
//   return knex('variants')
//     .del()
//     .then(() => {
//       knex('products').del();
//     })
//     .then(() => {
//       for (let i = 1; i < 11; i++) {
//         let pathway = path.join(__dirname, `/productData/productData${i}.csv`);

//         readFile(pathway, 'utf-8').then(data => {
//           let products = JSON.parse(data);
//           return knex('products').insert(products);
//         });
//       }
//     })
//     .then(() => {
//       for (let i = 1; i < 31; i++) {
//         let pathway = path.join(__dirname, `/variantData/variantData${i}.csv`);
//         return readFile(pathway, 'utf-8')
//           .then(data => {
//             let variants = JSON.parse(data);
//             return knex('variants').insert(variants);
//           })
//           .catch(err => console.log('Error', err));
//       }
//     })
//     .catch(err => {
//       console.log('Error', err);
//     });
// };
