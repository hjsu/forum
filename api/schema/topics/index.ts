// import * as graphql from 'graphql';
// import { forumType } from '../forums';

// export const topicType = new graphql.GraphQLObjectType({
//   name: 'Topic',
//   fields: () => ({
//     id: { type: graphql.GraphQLInt },
//     title: { type: graphql.GraphQLString },
//     forum: { 
//       type: forumType,
//       resolver: async(parent, _, {db}) => (
//         await db.forums.findOne({id: parent.forum_id}))
//     },
