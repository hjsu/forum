import * as graphql from 'graphql';
import { isEmpty } from 'ramda';
import { topicQuery } from '../topics';
import { userQuery } from '../users';

export const postType = new graphql.GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    body: { type: graphql.GraphQLString },
    topic: topicQuery((post, args) => ({
      ...args,
      id: post.topic_id
    })),
    user: userQuery((post, args) => ({
      ...args,
      id: post.user_id
    })),
    user_id: { type: graphql.GraphQLInt },
  })
})

const args = {
  id: { type: graphql.GraphQLInt },
  user_id: { type: graphql.GraphQLInt },
  topic_id: { type: graphql.GraphQLInt },
}

const resolve = filterFunc => async(parent, args, req) => {
  if (!parent && isEmpty(args)) throw 'Table too large for full load!';
  return await req.db.posts.find(filterFunc(parent, args));
}

export const postQueries = (filterFunc = (x,y) => y) => ({
  type: graphql.GraphQLList(postType),
  args,
  resolve: resolve(filterFunc)
})

const resolveOne = filterFunc => async(parent, args, req) =>
  await req.db.posts.findOne(filterFunc(parent, args));

export const postQuery = (filterFunc = (x,y) => y) => ({
  type: postType,
  args,
  resolve: resolveOne(filterFunc)
})
