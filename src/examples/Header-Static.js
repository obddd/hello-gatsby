import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
const HeaderStatic = () => {
  return (
    <div>
      I am using StaticQuery component
      <StaticQuery
        query={getData}
        render={data => {
          return (
            <div>
              <h3>{data.site.siteMetadata.description}</h3>
            </div>
          )
        }}
      ></StaticQuery>
    </div>
  )
}

export default HeaderStatic
