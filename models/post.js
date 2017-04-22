import orm from '../db/orm';
import Topic from './topic';
import User from './user';

const Post = orm.Model.extend({
  tableName: 'topics',
  hasTimeStamps: true,
  topic() {return this.belongsTo(Topic);},
  user() {return this.belongsTo(User);}
});

export default Post;
