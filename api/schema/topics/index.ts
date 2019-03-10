import * as graphql from 'graphql';
import { forumType } from '../forums';
import { userType } from '../users';

export const topicType = new graphql.GraphQLObjectType({
  name: 'Topic',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    forum: { 
      type: forumType,
      resolver: async(parent, _, {db}) => (
        await db.forums.findOne({id: parent.forum_id}))
    },
    author: {
      type: userType,
      resolver: async(parent, _, {db}) => (
        await db.users.findOne({id: parent.user_id}))
    }
  })
})

const resolve = async (args, {id}, request) => {
  if (id) {
    return [await request.db.topics.findOne(id)];
  }

  return await request.db.topics.find(args);
}

const args = {
  id: { type: graphql.GraphQLInt },
  author_id: { type: graphql.GraphQLInt },
  forum_id: { type: graphql.GraphQLInt },
}

export const topicQueries = {
  topics: {
    type: graphql.GraphQLList(topicType),
    args,
    resolve
  }
}
