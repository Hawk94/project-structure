import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = props => (
  <header className="Header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
    </nav>
  </header>
)

export default Header
