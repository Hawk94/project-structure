import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'
import { destroyToast } from 'actions/toasts'
import Toast from 'components/toast'

import './Toasts.css'

class ToastContainer extends Component {
  render() {
    const { toasts, dispatch } = this.props

    return ReactDOM.createPortal(
      <TransitionGroup className="o-toasts">
        {toasts.map((k, i) => (
          <Toast
            key={i}
            handleClick={() => {
              dispatch(destroyToast(k.id))
            }}
            {...k}
          />
        ))}
      </TransitionGroup>,
      document.getElementById('toasts')
    )
  }
}

ToastContainer = connect(state => {
  return {
    toasts: state.toasts.toasts
  }
})(ToastContainer)

export default ToastContainer
