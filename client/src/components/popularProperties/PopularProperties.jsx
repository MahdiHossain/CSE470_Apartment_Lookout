import React from 'react'
import { Link } from 'react-router-dom'
import classes from './popularProperties.module.css'
import img1 from '../../assets/realestatebeach.jpg'
import img2 from '../../assets/realestatemountain.jpg'
import img3 from '../../assets/realestatecountryside.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'

const PopularProperties = () => {
  const [gulshanProperties, setGulshanProperties] = useState(0)
  const [bananiProperties, setBananiProperties] = useState(0)
  const [dhanmondiProperties, setDhandmondiProperties] = useState(0)

  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/property/find/types', 'GET')
         setGulshanProperties(data.gulshan)
         setBananiProperties(data.banani)
         setDhandmondiProperties(data.dhanmondi)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesNumber()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=gulshan&priceRange=1`} className={classes.property}>
            <img src={img1} />
            <div className={classes.quantity}>{gulshanProperties} properties</div>
            <h5>Gulshan properties</h5>
          </Link>
          <Link to={`/properties?type=banani&priceRange=1`} className={classes.property}>
            <img src={img2} />
            <div className={classes.quantity}>{bananiProperties} properties</div>
            <h5>Banani properties</h5>
          </Link>
          <Link to={`/properties?type=dhanmondi&priceRange=1`} className={classes.property}>
            <img src={img3} />
            <div className={classes.quantity}>{dhanmondiProperties} properties</div>
            <h5>Dhanmondi properties</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties