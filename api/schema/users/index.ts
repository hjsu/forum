import * as graphql from 'graphql';
import { postQueries } from '../posts';

export const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    display_name: { type: graphql.GraphQLString },
    posts: postQueries((user, args) => ({
      ...args,
      user_id: user.id 
    }))
  })
})

const args = {
  id: { type: graphql.GraphQLInt },
  display_name: { type: graphql.GraphQLString }
}

const resolve = filterFunc => async(parent, args, req) =>
  await req.db.users.find(filterFunc(parent, args));

export const userQueries = (filterFunc = (x,y) => y) => ({
  type: graphql.GraphQLList(userType),
  args,
  resolve: resolve(filterFunc)
})

const resolveOne = filterFunc => async(parent, args, req) =>
  await req.db.users.findOne(filterFunc(parent, args));

export const userQuery = (filterFunc = (x,y) => y) => ({
  type: userType,
  args,
  resolve: resolveOne(filterFunc)
})

