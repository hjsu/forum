exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1, 
          topic_id: 1, 
          user_id: 2,
          body: 'Placeholder for forum rules.'
        } , {
          id: 2, 
          topic_id: 2, 
          user_id: 2,
          body: 'Placeholder for forum rules.'
        } , {
          id: 3, 
          topic_id: 3, 
          user_id: 2,
          body: 'Placeholder for forum rules.'
        } , {
          id: 4, 
          topic_id: 4, 
          user_id: 2,
          body: 'Placeholder for forum rules.'
        } , {
          id: 5, 
          topic_id: 5, 
          user_id: 5,
          body: 'See title'
        } , {
          id: 6, 
          topic_id: 5, 
          user_id: 2,
          body: 'Placeholder for forum rules.'
        } , {
          id: 7, 
          topic_id: 5, 
          user_id: 4,
          body: ':-)'
        } , {
          id: 8, 
          topic_id: 6, 
          user_id: 1,
          body: 'I\'m sorry, but I can\'t be the only one fed up with ' +
            'aberrations from the dungeon dimensions popping up all over the ' +
            'place. There\'s a time and a place for messing with the fabric ' +
            'of reality, and that\'s preferably long after I\'m dead, and ' +
            'far away from here.'
        } , {
          id: 9, 
          topic_id: 6, 
          user_id: 5,
          body: '+1'
        } , {
          id: 10, 
          topic_id: 6, 
          user_id: 4,
          body: '+ook'
        } , {
          id: 11, 
          topic_id: 6, 
          user_id: 2,
          body: 'You can\'t make an omelette without breaking eggs. If UU is ' +
            'to remain on the forefront of cutting edge research, sacrifices ' +
            'will have to be made. What happened to the Chairman of ' + 
            'Indefinite Studies was unfortunate, but I can assure you we are ' +
            'taking precautions to ensure no one needs worry about being ' +
            'eaten alive again.'
        } , {
          id: 12, 
          topic_id: 7, 
          user_id: 3,
          body: 'tttps://uutube.com/watch?v=83649'
        } 
      ]);
    });
};
