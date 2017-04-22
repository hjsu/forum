exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('posts', function(table){
      table.increments('id').primary();
      table.integer('topic_id').references('topics.id').index();
      table.integer('user_id').references('users.id').index();
      table.text('body', 'mediumtext');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('posts')
  ]);
};
