import * as graphql from 'graphql';
import { categoryQuery } from '../categories';

export const forumType = new graphql.GraphQLObjectType({
  name: 'Forum',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    parent_forum: forumQuery((forum, args) => ({
      ...args,
      id: forum.parent_forum_id
    })),
    category: categoryQuery((forum, args) => ({
      ...args,
      id: forum.category_id
    }))
  })
})

const args = {
  id: { type: graphql.GraphQLInt },
  category_id: { type: graphql.GraphQLInt },
  parent_forum_id: { type: graphql.GraphQLInt },
}

const resolve = filterFunc => async(parent, args, req) =>
  await req.db.forums.find(filterFunc(parent, args));

export const forumQueries = (filterFunc = (x,y) => y) => ({
  type: graphql.GraphQLList(forumType),
  args,
  resolve: resolve(filterFunc)
})

const resolveOne = filterFunc => async(parent, args, req) =>
  await req.db.forums.findOne(filterFunc(parent, args));

export const forumQuery = (filterFunc = (x,y) => y) => ({
  type: forumType,
  args,
  resolve: resolveOne(filterFunc)
})
