import knex from 'knex';
import knexConfig from '../knexfile';

export default knex(knexConfig[process.env.APP_ENV || 'development']);
