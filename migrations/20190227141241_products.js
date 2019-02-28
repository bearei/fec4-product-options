exports.up = function productsUp(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('products', (table) => {
      table.increments('itemId').primary();
      table.string('brand');
      table.string('title');
      table.integer('averageRating');
      table.integer('reviewCount');
      table.boolean('freeShipping');
      table.boolean('shippingRestriction');
    }),
    knex.schema.createTable('variants', (table) => {
      table.increments('variant_Id').primary();
      table.integer('product_id').unsigned();
      table.string('price');
      table.string('color');
      table.string('size');
      table.foreign('product_id').references('products.itemId');
    }),
  ]);
};

exports.down = function productsDown(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('variants'),
    knex.schema.dropTable('product'),
  ]);
};
