import * as graphql from 'graphql';
import { categoryType } from '../categories';

export const forumType = new graphql.GraphQLObjectType({
  name: 'Forum',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    parent_forum: { 
      type: forumType,
      resolver: async(parent, _, {db}) => (
        await db.forums.findOne({id: parent.parent_forum_id}))
    },
    category: { 
      type: categoryType,
      resolver: async(parent, _,{db}) => (
        await db.categories.findOne({id: parent.category_id}))
    }
  })
})

const resolve = async (_, args, req) => await req.db.forums.find(args);

const args = {
  id: { type: graphql.GraphQLInt },
  category_id: { type: graphql.GraphQLInt },
  parent_forum_id: { type: graphql.GraphQLInt },
}

export const forumQueries = {
  forums: {
    type: graphql.GraphQLList(forumType),
    args,
    resolve
  }
}
