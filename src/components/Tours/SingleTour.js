import React from "react"
import styles from "../../css/tour.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaMap } from "react-icons/fa"

const SingleTour = ({ tour }) => {
  const { name, price, country, images, slug, days } = tour
  const mainImage = images[0].fluid
  return (
    <section className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <Link className={styles.link} to={`/tour/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.detail}>
            <h6>{days}</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleTour
