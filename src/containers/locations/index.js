import 'components/Main'
import 'components/Tiles'
import React, { Component } from 'react'
import Header from 'components/Header'

class Locations extends Component {
  render() {
    return (
      <div className="Section">
        <Header />
        <div className="Main">
          <header className="title">Co-Living</header>
          <div className="Tiles">
            <div className="Tile orange" />
            <div className="Tile blue" />
            <div className="Tile pink" />
            <div className="Tile green" />
          </div>
        </div>
      </div>
    )
  }
}

export default Locations
