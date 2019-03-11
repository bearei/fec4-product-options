const { generateFakeProduct, generateFakeVariants } = require('./fakerCreators');
const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const handleProductCSV = () => {
  for (let i = 1; i <= 2; i++) {
    const sampleProducts = []; // 5 mil/2 files
    for (let j = 1; j <= 5000000; j++) {
      sampleProducts.push(generateFakeProduct());
    }

    const pathway = path.join(__dirname, `../seeds/productData/productData${i}.csv`);

    const csvWriter = createCsvWriter({
      path: pathway,
      header: [
        { id: 'itemId', title: 'itemId' },
        { id: 'brand', title: 'brand' },
        { id: 'title', title: 'title' },
        { id: 'averageRating', title: 'averageRating' },
        { id: 'reviewCount', title: 'reviewCount' },
        { id: 'freeShipping', title: 'freeShipping' },
        { id: 'shippingRestriction', title: 'shippingRestriction' }
      ]
    });

    csvWriter
      .writeRecords(sampleProducts)
      .then(() => console.log('The PRODUCT CSV file was written successfully'));
  }
};

const handleVariantCSV = () => {
  let itemCounter = 1;
  let modulo = 0;
  for (let i = 1; i <= 5; i++) {
    const variants = [];
    //  3 variants per 1 products - 6 mil
    for (let j = 1; j <= 6000000; j++) {
      const variantList = generateFakeVariants(itemCounter);
      modulo += 1;
      variants.push(variantList);
      if (modulo % 3 === 0) {
        itemCounter += 1;
        modulo = 0;
      }
    }
    const pathway = path.join(__dirname, `../seeds/variantData/variantData${i}.csv`);
    const csvWriter = createCsvWriter({
      path: pathway,
      header: [
        { id: 'variant_Id', title: 'variant_Id' },
        { id: 'itemId', title: 'itemId' },
        { id: 'price', title: 'price' },
        { id: 'color', title: 'color' },
        { id: 'size', title: 'size' }
      ]
    });
    csvWriter
      .writeRecords(variants)
      .then(() => console.log('The VARIANT CSV file was written successfully'));
  }
};

const createCSVs = async () => {
  console.time('createcsvs');
  await handleProductCSV();
  // await handleVariantCSV();
  console.timeEnd('createcsvs');
};
createCSVs();
