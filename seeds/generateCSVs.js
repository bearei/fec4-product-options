const { generateFakeProduct, generateFakeVariants } = require('../db/fakerCreators');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
var Transform = require('stream').Transform;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const productFiles = [];
// const variantFiles = [];

// const handleProductCSV = () => {
//   for (let i = 1; i < 11; i++) {
//     var sampleProducts = [];
//     for (let j = 0; j < 101; j++) {
//       // 1,000 records
//       sampleProducts.push(generateFakeProduct());
//     }

//     const pathway = path.join(__dirname, `../seeds/productData/productData${i}.csv`);

//     const csvWriter = createCsvWriter({
//       path: pathway,
//       header: [
//         { id: 'brand', title: 'brand' },
//         { id: 'title', title: 'title' },
//         { id: 'averageRating', title: 'averageRating' },
//         { id: 'reviewCount', title: 'reviewCount' },
//         { id: 'freeShipping', title: 'freeShipping' },
//         { id: 'shippingRestriction', title: 'shippingRestriction' }
//       ]
//     });

//     csvWriter
//       .writeRecords(sampleProducts)
//       .then(() => console.log('The PRODUCT CSV file was written successfully'));
//   }
// };

// const handleVariantCSV = () => {
//   // csv files
//   var itemCounter = 1;
//   var modulo = 0;
//   var variantId = 1;
//   for (let i = 1; i < 31; i++) {
//     var variants = [];
//     // records in one file
//     //  3 variants per 1 products
//     for (let j = 1; j < 101; j++) {
//       // 3 variants per product
//       let variantList = generateFakeVariants(variantId, itemCounter);
//       variantId++;
//       modulo++;
//       variants.push(variantList);
//       if (modulo % 3 === 0) {
//         itemCounter++;
//         modulo = 0;
//       }
//     }
//     // var flattenVariantList = [].concat.apply([], variants);
//     const pathway = path.join(__dirname, `../seeds/variantData/variantData${i}.csv`);
//     const csvWriter = createCsvWriter({
//       path: pathway,
//       header: [
//         { id: 'variant_Id', title: 'variant_Id' },
//         { id: 'itemId', title: 'itemId' },
//         { id: 'price', title: 'price' },
//         { id: 'color', title: 'color' },
//         { id: 'size', title: 'size' }
//       ]
//     });
//     csvWriter
//       .writeRecords(variants)
//       .then(() => console.log('The VARIANT CSV file was written successfully'));
//   }
// };

// const handleVariantCSV2 = () => {
//   // csv files
//   var itemCounter = 5000001;
//   var modulo = 0;
//   var variantId = 15000001;
//   for (let i = 16; i < 31; i++) {
//     var variants = [];
//     // records in one file
//     // 3,000 files / 1,000 =  3 variants per 1 products
//     for (let j = 1; j < 1000001; j++) {
//       // 3 variants per product
//       let variantList = generateFakeVariants(variantId, itemCounter);
//       variantId++;
//       modulo++;
//       variants.push(variantList);
//       if (modulo % 3 === 0) {
//         itemCounter++;
//         modulo = 0;
//       }
//     }
//     // var flattenVariantList = [].concat.apply([], variants);
//     const pathway = path.join(__dirname, `../seeds/variantData/variantData${i}.csv`);
//     const csvWriter = createCsvWriter({
//       path: pathway,
//       header: [
//         { id: 'variant_Id', title: 'variant_Id' },
//         { id: 'itemId', title: 'itemId' },
//         { id: 'price', title: 'price' },
//         { id: 'color', title: 'color' },
//         { id: 'size', title: 'size' }
//       ]
//     });
//     csvWriter
//       .writeRecords(variants)
//       .then(() => console.log('The VARIANT CSV file was written successfully'));
//   }
// };

// const readProductFiles = () => {
//   for (let i = 1; i < 11; i++) {
//     let data = [];
//     let pathway = path.join(__dirname, `../seeds/variantData/variantData${i}.csv`);
//     fs.createReadStream(pathway)
//       .pipe(csv())
//       .on('data', row => {
//         data.push(row);
//       })
//       .on('end', () => {
//         console.log('CSV file successfully processed');
//         console.log(data);
//       });
//     // }
//   }
// };

// const readProductFiles = () => {
//   return new Promise((resolve, reject) => {
//     let pathway = path.join(__dirname, `../seeds/variantData/variantData${1}.csv`);
//     fs.createReadStream(pathway)
//       .on('error', reject)
//       .pipe(csv())
//       .on('error', reject)
//       .pipe(
//         new Transform({
//           objectMode: true,
//           transform: function(chunk, _, next) {
//             // knex('variants')
//             // .insert(chunk)

//             console.log(chunk);
//             next();
//           },
//           function(done) {
//             resolve();
//             done();
//           }
//         })
//       )
//       .on('error', reject);
//   });
// };
exports.seed = async (knex, Promise) => {
  for (let i = 0; i < 1000000; i++) {
    let sampleProducts = [];
    for (let j = 0; j < 10; j++) {
      // 1,000 records
      sampleProducts.push(generateFakeProduct());
    }
    await knex('products').insert(sampleProducts);
  }

  let itemCounter = 1;
  let modulo = 0;
  for (let m = 0; m < 3000000; m++) {
    let sampleVariants = [];
    for (let j = 0; j < 10; j++) {
      sampleVariants.push(generateFakeVariants(itemCounter));
      modulo++;
      if (modulo % 3 === 0) {
        itemCounter++;
        modulo = 0;
      }
    }
    await knex('variants').insert(sampleVariants);
  }
};
// };
// grabProducts();
// // const pathway = path.join(__dirname, `../seeds/variantData/variantData${10}.csv`);
// console.log(pathway);

// handleProductCSV();
// handleVariantCSV();
// handleVariantCSV2();
// readProductFiles();
// module.exports = { variantFiles, productFiles };
