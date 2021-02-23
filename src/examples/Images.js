import React from "react"
import styled from "styled-components"
import img from "../images/image-1.jpg"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImage = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImage)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className="basic" alt='desert' />
      </article>
      <article>
        <h3>Fixed Image</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} alt='mountain' />
      </article>
      <article>
        <h3>Fluid Image</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} alt='sky' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  .basic {
    width: 100%;
  }
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  @media (min-width: 920px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
