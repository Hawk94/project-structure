import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.svg'
import MainMenu from './main-menu.svg'

import './Header.css'

const Header = props => (
  <header className="Header">
    <nav className="nav">
      <Link to="/">
        <img className="Logo" src={Logo} height="26px" width="22px" alt="Logo" />
      </Link>
      <Link to="/locations">
        <img className="Logo" src={MainMenu} height="26px" width="22px" alt="Menu" />
      </Link>
    </nav>
  </header>
)

export default Header
