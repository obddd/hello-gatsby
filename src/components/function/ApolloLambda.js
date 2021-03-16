import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    message
    user {
      name
      age
    }
    title
  }
`
const ApolloLambda = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)
  return (
    <div>
      <h2>
        Data Received from Apollo Client at runtime from Serverless Function:
      </h2>
      <div>
        {loading && <p>Loading Client Side Querry...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.message && <div>{data.message}</div>}
        {data && data.user && (
          <div>
            Name:{data.user.name} Age:{data.user.age}
          </div>
        )}

        {data && data.title && (
          <div>
            <h2>This data is coming from faunadb</h2>
            {data.title}
          </div>
        )}

      </div>
    </div>
  )
}

export default ApolloLambda
