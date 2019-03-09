import * as graphql from 'graphql';
import { categoryQueries } from './categories';
import { forumQueries } from './forums';
import { userQueries } from './users';

export default new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      ...categoryQueries,
      ...forumQueries,
      ...userQueries
    }
  })
});
