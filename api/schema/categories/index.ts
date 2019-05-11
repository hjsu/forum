import * as graphql from 'graphql';
import { forumQueries } from '../forums';

export const categoryType = new graphql.GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    forums: forumQueries((category, args) => ({
      ...args,
      category_id: category.id 
    })),
  })
})

const args = {
  id: { type: graphql.GraphQLInt }
}

const resolveOne = filterFunc => async(parent, args, req) =>
  await req.db.categories.findOne(filterFunc(parent, args));

export const categoryQuery = (filterFunc = (x,y) => y) => ({
  type: categoryType,
  args,
  resolve: resolveOne(filterFunc)
})

const resolve = filterFunc => async(parent, args, req) =>
  await req.db.categories.find(filterFunc(parent, args));

export const categoryQueries = (filterFunc = (x,y) => y) => ({
  type: graphql.GraphQLList(categoryType),
  args,
  resolve: resolve(filterFunc)
})
