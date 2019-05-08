import * as graphql from 'graphql';
import { forumQuery } from '../forums';
import { userQuery } from '../users';

export const topicType = new graphql.GraphQLObjectType({
  name: 'Topic',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    forum: forumQuery((topic, args) => ({
      ...args,
      id: topic.forum_id 
    })),
    author: userQuery((topic, args) => ({
      ...args,
      id: topic.author_id
    }))
  })
})

const args = {
  id: { type: graphql.GraphQLInt },
  author_id: { type: graphql.GraphQLInt },
  forum_id: { type: graphql.GraphQLInt },
}

const resolveOne = filterFunc => async(parent, args, req) =>
  await req.db.topics.findOne(filterFunc(parent, args));

export const topicQuery = (filterFunc = (x,y) => y) => ({
  type: topicType,
  args,
  resolve: resolveOne(filterFunc)
})

const resolve = filterFunc => async(parent, args, req) =>
  await req.db.topics.find(filterFunc(parent, args));

export const topicQueries = (filterFunc = (x,y) => y) => ({
  type: graphql.GraphQLList(topicType),
  args,
  resolve: resolve(filterFunc)
})
