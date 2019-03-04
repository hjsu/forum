import * as graphql from 'graphql';
import { categoryQueries } from './categories';

export default new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      ...categoryQueries
    }
  })
});
