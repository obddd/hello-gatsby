// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const random = require('random-name');
const faunadb = require('faunadb'),
  q = faunadb.query;
require("dotenv").config()

const handler = async event => {
  try {
    // const subject = event.queryStringParameters.name || 'World'
    // let name = random.first()
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SERVER_SECRET,
    })
    const result = await client.query(
      q.Get(q.Ref(q.Collection("posts"), "292327531019764229"))
    )
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
