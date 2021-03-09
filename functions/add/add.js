const faunadb = require("faunadb"),
  q = faunadb.query

const handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 500,
      body: "Method Not Allowed",
    }
  }
  let reqObj = JSON.parse(event.body)

  try {
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SERVER_SECRET,
    })
    const result = await client.query(
      q.Create(q.Collection("directory"), {
        data: {
          firstname: reqObj.firstname,
          lastname: reqObj.lastname,
          email: reqObj.email,
          password: reqObj.password,
        },
      })
    )
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: `${result.ref.id}`,
      })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
