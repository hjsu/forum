import orm from '../db/orm';
import Category from './category';

const Forum = orm.Model.extend({
  tableName: 'forums',
  hasTimeStamps: true,
  category() {return this.belongsTo(Category);}
});

export default Forum;
