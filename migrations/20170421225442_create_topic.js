exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('topics', function(table){
      table.increments('id').primary();
      table.integer('forum_id').references('forums.id').index();
      table.integer('user_id').references('users.id').index();
      table.string('title').notNullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('topics')
  ]);
};
