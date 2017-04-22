import orm from '../db/orm';
import bcrypt from 'bcrypt';

const User = orm.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,
  initialize() {
    this.on('creating', this.hashPassword, this);
  },
  hashPassword(model, attrs, options) {
    return new Promise(function(resolve, reject) {
      bcrypt.hash(model.attributes.password, 5, function(err, hash) {
        if( err ) reject(err);
        model.set('password', hash);
        resolve(hash); // data is created only after this occurs
      });
    });
  }
});

export default User;
