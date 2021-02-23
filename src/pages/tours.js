import React from "react"
import Tours from "../components/Tours/Tours"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const tours = ({ data }) => {
  return (
    <Layout>
      This is tour page
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query{
  tours: allContentfulTour{
    edges{
      node{
        id: contentful_id
        name 
        price
        country
        images{
          fluid{
            src
          }
        }
      }
    }
  }
}
`

export default tours
