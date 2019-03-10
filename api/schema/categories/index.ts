import * as graphql from 'graphql';
import { forumType, forumQueries } from '../forums';

export const categoryType = new graphql.GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    forums: forumQueries.forums
  })
})

const resolve = async (_, args, req) => await req.db.categories.find(args);

const args = {
  id: { type: graphql.GraphQLInt }
}

export const categoryQueries = {
  categories: {
    type: graphql.GraphQLList(categoryType),
    args,
    resolve
  }
}
