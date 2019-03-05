const faker = require('faker');

const generateFakeVariants = (id, productId) => {
  const variant = {
    variant_id: id,
    itemId: productId,
    price: (Math.random() * 100).toFixed(2),
    color: faker.internet.color(),
    size: ['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)],
  };
  return variant;
};

const generateFakeProduct = (id) => {
  const fakeProduct = {
    itemId: id,
    brand: faker.commerce.productName().split(' ')[0],
    title: faker.commerce.productName(),
    averageRating: (Math.random() * 5).toFixed(1),
    reviewCount: Math.floor(Math.random() * 100),
    freeShipping: faker.random.boolean(),
    shippingRestriction: faker.random.boolean(),
  };
  return fakeProduct;
};

exports.generateFakeVariants = generateFakeVariants;
exports.generateFakeProduct = generateFakeProduct;
