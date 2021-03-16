const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require('faunadb'),
q = faunadb.query;

const typeDefs = gql`
  type Query {
    message: String
    user: User
    title: String
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
    title: async (parent, args, context) => {
      try {
          const client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})
          let result = await client.query(
              q.Get(q.Ref(q.Collection('posts'), '292327531019764229'))
          )
          return result.data.title
      } catch (error) {
          return error.toString()
      }
  }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler()