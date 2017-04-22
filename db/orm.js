import db from './db';
import bookshelf from 'bookshelf';

let orm = bookshelf(db);

// To prevent model circular dependencies:
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
orm.plugin('registry');
orm.plugin('pagination');
orm.plugin('virtuals');
export default orm;
