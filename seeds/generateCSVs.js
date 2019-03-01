const { generateFakeProduct, generateFakeVariants } = require('../db/fakerCreators');
const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const handleProductCSV = () => {
  for (let i = 1; i < 11; i++) {
    var sampleProducts = [];
    for (let j = 0; j < 100; j++) {
      sampleProducts.push(generateFakeProduct());
    }

    const productInJSONFormat = JSON.stringify(sampleProducts);
    const pathway = path.join(__dirname, `/productData/productData${i}.csv`);
    return writeFile(pathway, productInJSONFormat)
      .then(() => console.log('file created successfully'))
      .then(() => {
        readFile(pathway, 'utf-8')
          .then(data => {
            return data;
          })
          .catch(err => console.log('Error', err));
      });
  }
};

const handleVariantCSV = () => {
  for (let i = 1; i < 31; i++) {
    var variants = [];
    for (let j = 0; j < 100; j++) {
      var itemId = j;
      for (let k = 0; k < 3; k++) {
        let variantList = generateFakeVariants(itemId);
        variants.push(variantList);
      }
    }
    var flattenVariantList = [].concat.apply([], variants);
    const productInJSONFormat = JSON.stringify(flattenVariantList);

    const pathway = path.join(__dirname, `/variantData/variantData${i}.csv`);
    return writeFile(pathway, productInJSONFormat)
      .then(() => console.log('file created successfully'))
      .then(() => {
        readFile(pathway, 'utf-8')
          .then(data => {
            return data;
          })
          .catch(err => console.log('Error', err));
      });
  }
};

exports.handleProductCSV = handleProductCSV;
exports.handleVariantCSV = handleVariantCSV;
