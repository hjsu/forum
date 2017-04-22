import orm from '../db/orm';
import Forum from './forum';
import User from './user';

const Topic = orm.Model.extend({
  tableName: 'topics',
  hasTimeStamps: true,
  forum() {return this.belongsTo(Forum);},
  user() {return this.belongsTo(User);}
});

export default Topic;
