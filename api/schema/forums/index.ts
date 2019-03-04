import * as graphql from 'graphql';
import { categoryType } from '../categories';

export const forumType = new graphql.GraphQLObjectType({
  name: 'Forum',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    parent_forum: { type: forumType },
    category: { type: categoryType }
  })
})

