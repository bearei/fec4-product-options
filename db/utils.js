const fakerCreator = require('./fakerCreator');

const fs = require('fs');
const path = require('path');

// ///////////////////////
// // GENERATE PRODUCTS //
// //////////////////////
const createProductFile = num => {
  for (let i = 1; i < num; i++) {
    var sampleProducts = [];
    for (let j = 1; j < 5; j++) {
      sampleProducts.push(fakerCreator.generateFakeProduct(j));
    }
    const productInJSONFormat = JSON.stringify(sampleProducts);
    const pathway = path.join(__dirname, `/productData/productData${i}.csv`);
    fs.writeFile(pathway, productInJSONFormat, err => {
      if (err) {
        throw 'error writing product data into file';
      } else {
        console.log('successfully wrote csv file');
      }
    });
  }
  return;
};

// ////////////////////////
// // GENERATE VARIANTS //
// ///////////////////////
const createVariantFile = num => {
  for (let i = 1; i < num; i++) {

    // create a readFile fn
      // take the variable

      //go through all 10 csv files
        // for each file
        // first, JSON.parse them
        // then loop through each object to grab it's itemId
        // 
      



    // grab the ids from all the csv files
    // 
  //   for (let j = 1; j < 31; j++) {
  //         var variants = [];
  //         for (let i = 0; i < itemIds.length; i++) {
  //           let itemId = itemIds[i];
  //           let variantList = generateFakeVariants(itemId);
  //           variants.push(variantList);
  //         }
      
  //         const flattenVariantList = [].concat.apply([], variants);
  // }
}
//   const pathway = path.join(__dirname, `/productData/productData${j}.csv`);
//   fs.readFile(exports.counterFile, (err, fileData) => {
//     if (err) {
//       callback(null, 0);
//     } else {
//       callback(null, Number(fileData));
//     }
//   });

// itemIds => {
//   for (let i = 1; i < 31; i++) {
//     var variants = [];
//     for (let i = 0; i < itemIds.length; i++) {
//       let itemId = itemIds[i];
//       let variantList = generateFakeVariants(itemId);
//       variants.push(variantList);
//     }

//     const flattenVariantList = [].concat.apply([], variants);

//     const productInJSONFormat = JSON.stringify(flattenVariantList);
//     const pathway = path.join(__dirname, `/variantData/variantData${1}.csv`);
//     fs.writeFile(pathway, productInJSONFormat, err => {
//       if (err) {
//         throw 'error writing product data into file';
//       } else {
//         console.log('successfully wrote csv file');
//       }
//     });
//   }
//   
