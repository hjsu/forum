// Not using ES6 because the knex cli doesn't play nice
var bcrypt = require('bcrypt'); 

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          user_name: 'rincewind',
          password: bcrypt.hashSync('Arrgh123-', 10),
          email: 'rincewind@unusual_geography.unseen.edu',
          name: 'Rincewind'
        },{
          id: 2, 
          user_name: 'stibbons',
          password: bcrypt.hashSync('2Thaumsup', 10),
          email: 'pstibbons@research.unseen.edu',
          name: 'Ponder Stibbons'
        }, {
          id: 3, 
          user_name: 'RIDCULLY_AM',
          password: bcrypt.hashSync('password', 10),
          email: 'MUSTRUMRIDCULLY@unseen.edu',
          name: 'Mustrum Ridcully'
        }, {
          id: 4,
          user_name: 'the_librarian',
          password: bcrypt.hashSync('z98@e_2MHnerOOK', 10),
          email: 'the_librarian@library.unseen.edu',
          name: 'Librarian'
        }, {
          id: 5, 
          user_name: 'the deanster',
          password: bcrypt.hashSync('Yomotha123', 10),
          email: 'dean@unseen.edu',
          name: 'Deanooo'
        }
      ]);
    });
};
