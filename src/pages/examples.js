import React from "react"
import HeaderHooks from "../examples/Header-Hooks"
import HeaderStatic from "../examples/Header-Static"
import { graphql } from "gatsby"
const Examples = props => {
  const { description } = props.data.site.siteMetadata
  return (
    <div>
      <HeaderHooks />
      <HeaderStatic />
      <div>
        I am using page query
        <h3>{description}</h3>
      </div>
    </div>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Examples
