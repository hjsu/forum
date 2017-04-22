exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        {
          id: 1, 
          forum_id: 1,
          user_id: 2,
          title: 'Forum Rules'
        } , {
          id: 2, 
          forum_id: 2,
          user_id: 2,
          title: 'Forum Rules'
        } , {
          id: 3, 
          forum_id: 3,
          user_id: 2,
          title: 'Forum Rules'
        } , {
          id: 4, 
          forum_id: 4,
          user_id: 2,
          title: 'Forum Rules'
        } , {
          id: 5, 
          forum_id: 1,
          user_id: 5,
          title: 'Who ate all the bananas lol'
        } , {
          id: 6, 
          forum_id: 1,
          user_id: 1,
          title: 'Please cease dangerous thaumic experiments on campus'
        } , {
          id: 7, 
          forum_id: 1,
          user_id: 3,
          title: 'FWD: must see: amazing man with duck on head'
        }
      ]);
    });
};
