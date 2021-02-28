import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="wrapper-navbar">
      <Link to="/home">
        Home
      </Link>
      <div>
        <Link to="/about">
          About
        </Link>
        <Link to="/gallery">
          Gallery
        </Link>
        <Link to="/biodata">
          Biodata
        </Link>
      </div>
    </div>
  )
}

export default Navbar
