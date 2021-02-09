import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
{
      site {
        siteMetadata {
          myName: title
          description
          author
        }
      }
    }
`

const Header = () => {
  const {
    site: {
      siteMetadata: info
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>{info.myName}</h1>
      <h2>Created by: {info.author}</h2>
    </div>
  )
}

export default Header
