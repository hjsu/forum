import orm from '../db/orm';
import Category from './category';
import Topic from './topic';

const Forum = orm.Model.extend({
  tableName: 'forums',
  hasTimeStamps: true,
  category() {return this.belongsTo(Category);},
  topics() {return this.hasMany(Topic);}
});

export default Forum;
