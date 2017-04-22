exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('forums', function(table){
      table.increments('id').primary();
      table.integer('category_id').references('categories.id');
      table.integer('parent_forum').references('forums.id');
      table.string('name').notNullable();
      table.string('description');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('forums')
  ]);
};
