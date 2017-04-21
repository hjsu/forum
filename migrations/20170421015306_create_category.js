
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('categories', function(table){
      table.increments('id').primary();
      table.string('name').unique().notNullable();
      table.string('description').notNullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('categories')
  ]);
};
