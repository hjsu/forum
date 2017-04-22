import orm from '../db/orm';
import Forum from './forum';

const Category = orm.Model.extend({
  tableName: 'categories',
  hasTimeStamps: true,
  forums() {return this.hasMany(Forum);}
})

export default Category;
