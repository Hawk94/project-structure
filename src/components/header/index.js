import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
  <header className="c-header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
    </nav>
  </header>
)

export default Header
