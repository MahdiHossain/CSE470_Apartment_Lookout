import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI.js'
import img from '../../assets/featuredhouse.png'
import person from '../../assets/person1.jpeg'
import classes from './featuredProperties.module.css'
import { Link } from 'react-router-dom'
import { FaBed, FaSquareFull } from 'react-icons/fa'
const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([])
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await request('/property/find/featured', 'GET')
        console.log(data)
        setFeaturedProperties(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchFeatured()
  }, [])
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h5>Properties you may like</h5>
          <h2>Our featured Properties</h2>
        </div>
        <div className={classes.featuredProperties}>
          {featuredProperties?.map((property) => (
            <div key={property._id} className={classes.featuredProperty}>
              <Link to={`/propertyDetails/${property._id}`} className={classes.imgContainer}>
                <img src={img} alt=""/>
              </Link>
              <div className={classes.details}>
                <div className={classes.priceAndOwner}>
                  <span className={classes.price}>$ </span>
                  <img src={person} className={classes.owner}/>
                </div>
                <div className={classes.moreDetails}>
                  <span>{property?.beds} beds <FaBed className={classes.icon} /></span>
                  <span>{property?.sqfeet} square foots <FaSquareFull className={classes.icon} /></span>
                </div>
                <div className={classes.desc}>
                  {property?.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FeaturedProperties