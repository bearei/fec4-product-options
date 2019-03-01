const path = require('path');
// const util = require('util');
// const readFile = util.promisify(fs.readFile);
// const { variantFiles, productFiles } = require('../db/generateCSVs');
const csv = require('csv-parser');
const fs = require('fs');

// exports.seed = (knex, Promise) => {
//   return knex('variants')
//     .del()
//     .then(() => {
//       knex('products').del();
//     })
//     .then(() => {
//       ////
//       // for (let i = 1; i < 11; i++) {
//       let data = [];
//       let pathway = path.join(__dirname, `/productData/productData${1}.csv`);
//       fs.createReadStream(pathway)
//         .pipe(csv())
//         .on('data', knex('products').insert())
//         .on('end', () => {
//           console.log('CSV file successfully processed');
//         });
//       // }
//       // }
//       ////

//       // for (let i = 1; i < 11; i++) {
//       // let pathway = path.join(__dirname, `/productData/productData${1}.csv`);

//       // return fs
//       //   .createReadStream(pathway)
//       //   .pipe(csv())
//       //   .on('data', row => {
//       //     return knex('products').insert(data);
//       //   })
//       //   .on('end', data => {
//       //     console.log('CSV file successfully processed');
//       //   });
//       // }
//     })
//     .catch(err => {
//       console.log('Error', err);
//     });
// };

var Transform = require('stream').Transform;
//^ only in iojs use through2 otherwise

exports.seed = (knex, Promise) => {
  return new Promise((resolve, reject) => {
    var isProduct = true;
    for (let i = 1; i < 41; i++) {
      if (i < 11 && isProduct) {
        let pathway = path.join(__dirname, `/productData/productData${i}.csv`);
        fs.createReadStream(pathway)
          .on('error', reject)
          .pipe(csv())
          .on('error', reject)
          .pipe(
            new Transform({
              objectMode: true,
              transform: function(chunk, _, next) {
                knex('products')
                  .insert(chunk)
                  .then(function() {
                    next();
                  }, next);
              },
              function(done) {
                resolve();
                done();
              }
            })
          )
          .on('error', reject);
        if (i === 10 && isProduct) {
          isProduct = !isProduct;
        }
      } else {
        let pathway = path.join(__dirname, `/variantData/variantData${i - 10}.csv`);
        fs.createReadStream(pathway)
          .on('error', reject)
          .pipe(csv())
          .on('error', reject)
          .pipe(
            new Transform({
              objectMode: true,
              transform: function(chunk, _, next) {
                knex('variants')
                  .insert(chunk)
                  .then(function() {
                    next();
                  }, next);
              },
              function(done) {
                resolve();
                done();
              }
            })
          )
          .on('error', reject);
      }
    }
  });
};
