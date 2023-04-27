import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [type, setType] = useState("Gulshan")
  const [priceRange, setPriceRange] = useState("0")
  const navigate = useNavigate()

  // TODO here or somewhere home(fetching properties)

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Find your dream home with the click of a button - your journey starts here.</h2>
        <h5>Search the best selection of luxury apartments</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select Area</option>
            <option value="Gulshan">Gulshan</option>
            <option value="banani">Banani</option>
            <option value="dhanmdoni">Dhanmondi</option>
            <option value="baridhara">Baridhara</option>
            <option value="mohakhali">Mohakhali</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0 - 10,000</option>
            <option value="1">10,001 - 20,000</option>
            <option value="2">20,001 - 30,000</option>
            <option value="3">30,001 - 40,000</option>
            <option value="4">40,001 - 50,000</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Hero