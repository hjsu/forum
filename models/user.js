import orm from '../db/orm';
import bcrypt from 'bcrypt';

const User = orm.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,
  initialize() {
    this.on('saving', this.hashPassword, this);
  },
  hashPassword() {
    var self = this;
    return bcrypt.hash(self.get('password', 10))
      .then(hash => {
        self.set({'password': hash});
      });
  }
});

export default User;
