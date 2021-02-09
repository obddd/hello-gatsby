import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        myName: title
        description
        author
      }
    }
  }
`

const HeaderHooks = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  return (
    <div>
      I am using useStaticQuery hook
      <h1>{info.myName}</h1>
      <h2>Created by: {info.author}</h2>
    </div>
  )
}

export default HeaderHooks
