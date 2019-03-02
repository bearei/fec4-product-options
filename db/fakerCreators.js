const faker = require('faker');

const generateFakeVariants = itemId => {
  // const variants = [];
  // const isUniqueColor = color => variants.every(variant => variant.color !== color);

  const variant = {
    itemId: itemId,
    price: (Math.random() * 100).toFixed(2),
    color: faker.internet.color(),
    size: ['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)]
  };
  // if (isUniqueColor(variant.color)) {
  // variants.push(variant);
  // }

  return variant;
};

const generateFakeProduct = () => {
  // const id = Math.floor(Math.random() * 100);
  const fakeProduct = {
    itemId: null,
    brand: faker.commerce.productName().split(' ')[0],
    title: faker.commerce.productName(),
    averageRating: (Math.random() * 5).toFixed(1),
    reviewCount: Math.floor(Math.random() * 100),
    freeShipping: faker.random.boolean(),
    shippingRestriction: faker.random.boolean()
  };
  return fakeProduct;
};

exports.generateFakeVariants = generateFakeVariants;
exports.generateFakeProduct = generateFakeProduct;
