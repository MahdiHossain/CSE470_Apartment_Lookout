import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            First own website Lessgo!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>Developer: Mahdi Hossain</span>
          <span>GitHub: https://github.com/MahdiHossain</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: Bangladesh</span>
          <span>Current Location: Mohakhali, Dhaka</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer