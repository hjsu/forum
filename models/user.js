import orm from '../db/orm';

const User = orm.Model.extend({
  tableName: 'users'
});

export default User;
