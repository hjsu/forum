import * as graphql from 'graphql';
import { forumType } from '../forums';

export const categoryType = new graphql.GraphQLObjectType({
  name: 'Category',
  fields: {
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString }
  }
})

const categoryQueryResolver = async (_, {id}, request) => {
  if (id) {
    return await request.db.categories.findOne(id);
  }

  return await request.db.categories.find();
}

export const categoryQueries = {
  categories: {
    type: graphql.GraphQLList(categoryType),
    resolve: categoryQueryResolver
  },
  category: {
    type: categoryType,
    args: {
      id: { type: graphql.GraphQLInt }
    },
    resolve: categoryQueryResolver
  }
}
