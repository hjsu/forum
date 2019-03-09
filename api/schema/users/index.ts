import * as graphql from 'graphql';

export const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    user_name: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    display_name: { type: graphql.GraphQLString }
  })
})

const resolve = async (_, {id}, request) => {
  if (id) {
    return [await request.db.users.findOne(id)];
  }

  return await request.db.users.find();
}

const args = {
  id: { type: graphql.GraphQLInt },
  email: { type: graphql.GraphQLString }
}

export const userQueries = {
  users: {
    type: graphql.GraphQLList(userType),
    args,
    resolve
  }
}
