import * as graphql from 'graphql';
import { categoryQueries } from '../categories';

export const forumType = new graphql.GraphQLObjectType({
  name: 'Forum',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    parent_forum: forumQueries.forums,
    category: categoryQueries.categories,
  })
})

const resolve = async (_, args, req) => await req.db.forums.find(args);

const args = {
  id: { type: graphql.GraphQLInt },
  category_id: { type: graphql.GraphQLInt },
  parent_forum_id: { type: graphql.GraphQLInt },
}

export const forumQueries = {
  forums: {
    type: graphql.GraphQLList(forumType),
    args,
    resolve
  }
}
