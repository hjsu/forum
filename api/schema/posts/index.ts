import * as graphql from 'graphql';
import { isEmpty } from 'ramda';
import { topicType, topicQueries } from '../topics';
import { userType, userQueries } from '../users';

export const postType = new graphql.GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    body: { type: graphql.GraphQLString },
    topic: topicQueries.topics,
    user: userQueries.users
  })
})

const resolve = async (_, args, request) => {
  if (isEmpty(args)) throw 'Table too large for full load!';
  return await request.db.posts.find(args);
}

const args = {
  id: { type: graphql.GraphQLInt },
  user_id: { type: graphql.GraphQLInt },
  topic_id: { type: graphql.GraphQLInt },
}

export const postQueries = {
  posts: {
    type: graphql.GraphQLList(postType),
    args,
    resolve
  }
}
