import * as graphql from 'graphql';
import { forumQueries } from '../forums';
import { userQueries } from '../users';

export const topicType = new graphql.GraphQLObjectType({
  name: 'Topic',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    forum: forumQueries.forums,
    author: userQueries.users
  })
})

const resolve = async (_, args, req) => await req.db.topics.find(args);

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
