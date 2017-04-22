exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forums').del()
    .then(function () {
      // Inserts seed entries
      return knex('forums').insert([
        {
          id: 1, 
          category_id: 1,
          parent_forum: null,
          name: 'Faculty Discussion',
        } , {
          id: 2, 
          category_id: 1,
          parent_forum: 1,
          name: 'Admissions',
        } , {
          id: 3, 
          category_id: 1,
          parent_forum: null,
          name: 'Off-Topic',
        } , {
          id: 4, 
          category_id: 2,
          parent_forum: null,
          name: 'Bugs',
        } 
      ]);
    });
};
