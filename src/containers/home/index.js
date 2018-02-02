import React, { Component } from 'react'
import Modal from 'components/modal'

const defaultProps = {
  showModal: false
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.setState({
      showModal: props.showModal
    })
  }

  render() {
    const { showModal } = this.state

    return (
      <div className="home">
        <h1>Home</h1>
        <button
          data-balloon="Whats up!"
          data-balloon-pos="up"
          onClick={() => this.setState({ showModal: true })}
        >
          Do a modal
        </button>

        {showModal && (
          <Modal handleClose={() => this.setState({ showModal: false })}>
            <div>Hello I am a modal</div>
          </Modal>
        )}
      </div>
    )
  }
}

Home.defaultProps = defaultProps

export default Home
