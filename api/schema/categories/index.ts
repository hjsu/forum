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

const resolve = async (_, {id}, request) => {
  if (id) {
    return [await request.db.categories.findOne(id)];
  }

  return await request.db.categories.find();
}

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
