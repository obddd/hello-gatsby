import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const {
    site: {
      siteMetadata: info
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div>
      <h1>{info.title}</h1>
      <h2>Created by: {info.author}</h2>
    </div>
  )
}

export default Header
