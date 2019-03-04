const path = require('path');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
var Transform = require('stream').Transform;
// // const { variantFiles, productFiles } = require('../db/generateCSVs');
const { generateFakeProduct, generateFakeVariants } = require('../db/fakerCreators');
var csv = require('csvtojson');
// const csv = require('csv-parser');

const fnWithCSV = () => {
  //////////////////takes forever
  // const csv = require('csv-parser');
  // var Transform = require('stream').Transform;
  // exports.seed = (knex, Promise) => {
  //   return new Promise((resolve, reject) => {
  //     var isProduct = true;
  //     for (let i = 1; i < 41; i++) {
  //       if (i < 11 && isProduct) {
  //         let pathway = path.join(__dirname, `/productData/productData${i}.csv`);
  //         fs.createReadStream(pathway)
  //           .on('error', reject)
  //           .pipe(csv())
  //           .on('error', reject)
  //           .pipe(
  //             new Transform({
  //               objectMode: true,
  //               transform: function(chunk, _, next) {
  //                 knex('products')
  //                   .insert(chunk)
  //                   .then(function() {
  //                     next();
  //                   }, next);
  //               },
  //               function(done) {
  //                 resolve();
  //                 done();
  //               }
  //             })
  //           )
  //           .on('error', reject);
  //         if (i === 10 && isProduct) {
  //           isProduct = !isProduct;
  //         }
  //       } else {
  //         let pathway = path.join(__dirname, `/variantData/variantData${i - 10}.csv`);
  //         fs.createReadStream(pathway)
  //           .on('error', reject)
  //           .pipe(csv())
  //           .on('error', reject)
  //           .pipe(
  //             new Transform({
  //               objectMode: true,
  //               transform: function(chunk, _, next) {
  //                 knex('variants')
  //                   .insert(chunk)
  //                   .then(function() {
  //                     next();
  //                   }, next);
  //               },
  //               function(done) {
  //                 resolve();
  //                 done();
  //               }
  //             })
  //           )
  //           .on('error', reject);
  //       }
  //     }
  //   });
  // };
  ////////////////// not pushing to db
  // let data = [];
  // let pathway = path.join(__dirname, `../seeds/variantData/variantData${1}.csv`);
  // fs.createReadStream(pathway)
  //   .pipe(csv())
  //   .on('data', row => {
  //     data.push(row);
  //   })
  //   .on('end', async () => {
  //     console.log('CSV file successfully processed');
  //     await knex('variants').insert(data);
  //   });
  ////////////////// ERROR packets out of order
  // return knex('variants')
  //   .del()
  //   .then(() => {
  //     knex('products').del();
  //   })
  //   .then(async () => {
  //     let csvFile2 = path.join(__dirname, `/variantData/variantData${30}.csv`);
  //     let jsonArray2 = await csv().fromFile(csvFile2);
  //     return knex('variants').insert(jsonArray2);
  //   });
};

// // without csv
exports.seed = async (knex, Promise) => {
  console.time('seeded');
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
  console.timeEnd('seeded');
};
