require('./index.js'); // db connection
// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

// mongoose.Promise = global.Promise;

// const variantSchema = new mongoose.Schema({
//   itemId: {
//     type: Number,
//     ref: 'Product',
//   },
//   price: String,
//   color: String,
//   size: String,
// });

// const productSchema = new mongoose.Schema({
//   itemId: {
//     type: Number,
//     unique: true,
//   },
//   brand: String,
//   title: String,
//   averageRating: Number,
//   reviewCount: Number,
//   freeShipping: Boolean,
//   shippingRestriction: Boolean,
//   variants: [variantSchema],
// });

// productSchema.plugin(uniqueValidator);

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
