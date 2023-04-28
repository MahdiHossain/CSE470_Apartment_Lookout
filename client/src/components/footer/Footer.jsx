import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            my first MERN Apartment buying CSE470 Website
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>GitHub: https://github.com/MahdiHossain</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Country: Bangladesh</span>
          <span>Current Location: Mohakhali, Dhaka</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer