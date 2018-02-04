import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

class Modal extends Component {
  render() {
    const { handleClose } = this.props
    return ReactDOM.createPortal(
      <div className="Modal">
        <main className="content">
          {this.props.children}
          <button onClick={handleClose}>Close</button>
        </main>
      </div>,
      document.getElementById('modal')
    )
  }
}

export default Modal
