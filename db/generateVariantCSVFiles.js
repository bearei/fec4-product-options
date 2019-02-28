const utils = require('./utils');

console.time('datagen');

const num = 11;
utils.createVariantFile(num);

console.timeEnd('datagen');
