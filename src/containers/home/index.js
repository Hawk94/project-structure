import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'components/modal'
import Header from 'components/header'

const defaultProps = {
  showModal: false
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: props.showModal
    }
  }

  render() {
    const { showModal } = this.state

    return (
      <div className="Section">
        <Header />
        <div className="Main">
          <button
            className="Btn"
            data-balloon="Whats up!"
            data-balloon-pos="up"
            onClick={() => this.setState({ showModal: true })}
          >
            Do a modal
          </button>
          <div style={{ 'padding-top': '10px' }}>
            <button className="Btn">
              <Link className="Btn" to="/protected">
                Protected Route
              </Link>
            </button>
          </div>

          {showModal && (
            <Modal handleClose={() => this.setState({ showModal: false })}>
              <div>Hello I am a modal</div>
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

Home.defaultProps = defaultProps

export default Home
