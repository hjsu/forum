import orm from '../db/orm';
import Forum from './forum';
import User from './user';
import Post from './post';

const Topic = orm.Model.extend({
  tableName: 'topics',
  hasTimeStamps: true,
  forum() {return this.belongsTo(Forum);},
  user() {return this.belongsTo(User);},
  posts() {return this.hasMany(Post);},
});

export default Topic;
