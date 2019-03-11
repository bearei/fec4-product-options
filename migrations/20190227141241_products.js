exports.up = function productsUp(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('products', table => {
      table.increments('itemId').primary();
      table.string('brand');
      table.string('title');
      table.decimal('averageRating');
      table.integer('reviewCount');
      table.string('freeShipping');
      table.string('shippingRestriction');
    }),
    knex.schema.createTable('variants', table => {
      table.increments('variant_Id').primary();
      table.integer('itemId');
      table.string('price');
      table.string('color');
      table.string('size');
    })
  ]);
};

exports.down = function productsDown(knex, Promise) {
  return Promise.all([knex.schema.dropTable('variants'), knex.schema.dropTable('product')]);
};

// without csv
// knex.schema.createTable('products', table => {
//   table.increments('itemId').primary();
//   table.string('brand');
//   table.string('title');
//   table.integer('averageRating');
//   table.integer('reviewCount');
//   table.boolean('freeShipping');
//   table.boolean('shippingRestriction');
// }),
// knex.schema.createTable('variants', table => {
//   table.increments('variant_Id').primary();
//   table.integer('itemId');
//   table.string('price');
//   table.string('color');
//   table.string('size');
// })
// ]);
