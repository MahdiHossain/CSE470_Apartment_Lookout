import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../../assets/house1.png'
import img2 from '../../assets/house2.png'
import img3 from '../../assets/house3.png'
import img4 from '../../assets/house4.png'
import img5 from '../../assets/house5.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI.js'
import classes from './popularProperties.module.css'

const PopularProperties = () => {
  const [gulshanProperties, setGulshanProperties] = useState(0)
  const [bananiProperties, setBananiProperties] = useState(0)
  const [dhanmondiProperties, setDhandmondiProperties] = useState(0)
  const [baridharaProperties, setBaridharaProperties] = useState(0)
  const [mohakhaliProperties, setMohakhaliProperties] = useState(0)
  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/property/find/types', 'GET')

         setGulshanProperties(data.gulshan)
         setBananiProperties(data.banani)
         setDhandmondiProperties(data.dhanmondi)
         setBaridharaProperties(data.baridhara)
         setMohakhaliProperties(data.mohakhali)
         console.log(data)
         
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
          <h5>Different types of apartments</h5>
          <h2>Best type of apartments for sale or rent</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=gulshan0&priceRange=1`} className={classes.property}>
            <img src={img1} />
            <div className={classes.quantity}>{gulshanProperties} apartments</div>
            <h5>Gulshan apartments</h5>
          </Link>
          <Link to={`/properties?type=banani&priceRange=1`} className={classes.property}>
            <img src={img2} />
            <div className={classes.quantity}>{bananiProperties} apartments</div>
            <h5>Banani apartments</h5>
          </Link>
          <Link to={`/properties?type=dhanmondi&priceRange=1`} className={classes.property}>
            <img src={img3} />
            <div className={classes.quantity}>{dhanmondiProperties} apartments</div>
            <h5>Dhanmondi apartments</h5>
          </Link>
          <Link to={`/properties?type=baridhara&priceRange=1`} className={classes.property}>
            <img src={img4} />
            <div className={classes.quantity}>{baridharaProperties} apartments</div>
            <h5>Baridhara apartments</h5>
          </Link>
          <Link to={`/properties?type=mohakhali&priceRange=1`} className={classes.property}>
            <img src={img5} />
            <div className={classes.quantity}>{mohakhaliProperties} apartments</div>
            <h5>Mohakhali apartments</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PopularProperties