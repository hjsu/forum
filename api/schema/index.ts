import * as graphql from 'graphql';
import { categoryQueries } from './categories';
import { forumQueries } from './forums';
import { userQueries } from './users';
import { topicQueries } from './topics';
import { postQueries } from './posts';

export default new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      ...categoryQueries,
      ...forumQueries,
      ...userQueries,
      ...topicQueries,
      ...postQueries
    }
  })
});
