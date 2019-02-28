const utils = require('./utils');

console.time('datagen');

const num = 11;
utils.createProductFile(num);

console.timeEnd('datagen');
