exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Discussion', description: 'General Discussion'},
        {id: 2, name: 'Engineering', description: 'Forums Engineering'},
      ]);
    });
};
