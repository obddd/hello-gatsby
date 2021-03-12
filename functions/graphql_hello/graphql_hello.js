const { ApolloServer, gql } = require("apollo-server-lambda")

const typeDefs = gql`
  type Query {
    message: String
    user: User
  }
  type User {
    name: String
    age: Int
  }
`
const resolvers = {
  Query: {
    message: (parent, args, context) => {
      return "Hello world from Obaid!"
    },
    user: (parent, args, context) => {
      return {
        name: "Obaid",
        age: 22,
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler()