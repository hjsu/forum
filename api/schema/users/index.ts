import * as graphql from 'graphql';

export const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    display_name: { type: graphql.GraphQLString }
  })
})

const resolve = async (_, args, req) => await req.db.users.find(args);

const args = {
  id: { type: graphql.GraphQLInt },
  display_name: { type: graphql.GraphQLString }
}

export const userQueries = {
  users: {
    type: graphql.GraphQLList(userType),
    args,
    resolve
  }
}
