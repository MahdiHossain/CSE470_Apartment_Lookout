import React from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.left}>
          Real Estate <BsHouseDoor />
        </Link>
        <ul className={classes.Door}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Featured</li>
          <li className={classes.listItem}>Contacts</li>
        </ul>
        <div className={classes.right}>
          <Link to='/signup'>Sign up</Link>
          <Link to='/signup'>Sign in</Link>
        </div>
      </div>
    </div>
    
    

  )
}

export default Navbar