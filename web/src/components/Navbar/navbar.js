
import "./navbar.css"

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navi'> 
      <Link to="/aboutus" className="nav-link">About</Link>
      <Link to="/"  className="nav-link">Foods</Link>
      <Link to="/contact"  className="nav-link">contact</Link>
    <Link to="/restaurant"  className="nav-link">Restaurant</Link>
</div>
  )
}







