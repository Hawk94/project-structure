import 'components/main'
import 'components/tiles'
import React, { Component } from 'react'
import Header from 'components/header'

class Locations extends Component {
  render() {
    return [
      <Header />,
      <div className="Main">
        <header className="title">Co-Living</header>
        <div className="Tiles">
          <div className="Tile orange" />
          <div className="Tile blue" />
          <div className="Tile pink" />
          <div className="Tile green" />
        </div>
      </div>
    ]
  }
}

export default Locations
