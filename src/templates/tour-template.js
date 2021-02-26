import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../css/template.module.css"
import Image from "gatsby-image"
import { FaMap, FaMoneyBillWave } from "react-icons/fa"

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
    journey,
  } = data.tour
  return (
    <section className={styles.template}>
      <div className={styles.center}>
        <div className={styles.images}>
          {images.map((item, index) => (
            <Image
              className={styles.image}
              key={index}
              fluid={item.fluid}
              alt={name}
            />
          ))}
        </div>
        <h2>{name}</h2>
        <div className={styles.info}>
          <p>
            <FaMoneyBillWave className={styles.icon} />
            Starting from ${price}
          </p>
          <p>
            <FaMap className={styles.icon} />
            {country}
          </p>
        </div>
        <h4>starts on: {start}</h4>
        <h4>duration: {days} days</h4>
        <p className={styles.desc}>{description}</p>
        <h2>Daily Schedule</h2>
        <ul className={styles.journey}>
          {journey.map((item, index) => {
            return <li key={index}>{item.day}</li>
          })}
        </ul>
        <Link to="/tours">Back to tours</Link>
      </div>
    </section>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      slug
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default TourTemplate
