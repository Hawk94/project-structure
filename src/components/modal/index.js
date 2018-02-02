import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

class Modal extends Component {
  render() {
    const { handleClose } = this.props
    return ReactDOM.createPortal(
      <div className="o-modal">
        <main className="o-modal-body">
          {this.props.children}
          <button onClick={handleClose}>Close</button>
        </main>
      </div>,
      document.getElementById('modal')
    )
  }
}

export default Modal
