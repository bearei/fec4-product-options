// const faker = require('faker');

// const generateFakeVariants = (id) => {
//   const variants = [];

//   const isUniqueColor = color => variants.every(variant => variant.color !== color);

//   for (let i = 0; i < (1 + Math.floor(Math.random() * 6)); i++) {
//     const variant = {
//       itemId: id,
//       price: (Math.random() * 100).toFixed(2),
//       color: faker.internet.color(),
//       size: ['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)],
//     };
//     if (isUniqueColor(variant.color)) {
//       variants.push(variant);
//     }
//   }
//   return variants;
// };

// const generateFakeProduct = () => {
//   const id = Math.floor(Math.random() * 1000000);
//   const fakeProduct = {
//     itemId: id,
//     brand: faker.commerce.productName().split(' ')[0],
//     title: faker.commerce.productName(),
//     averageRating: (Math.random() * 5).toFixed(1),
//     reviewCount: Math.floor(Math.random() * 100),
//     freeShipping: faker.random.boolean(),
//     shippingRestriction: faker.random.boolean(),
//     variants: generateFakeVariants(id),
//   };
//   return fakeProduct;
// };

// exports.generateFakeVariants = generateFakeVariants;
// exports.generateFakeProduct = generateFakeProduct;
