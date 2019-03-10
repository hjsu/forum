import * as graphql from 'graphql';

export const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    display_name: { type: graphql.GraphQLString }
  })
})

const resolve = async (args, {id}, request) => {
  if (id) {
    return [await request.db.users.findOne(id)];
  }

  return await request.db.users.find(args);
}

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
