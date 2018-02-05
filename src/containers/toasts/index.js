import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'
import { hideToast } from 'actions/toasts'
import Toast from 'components/toast'

class ToastContainer extends Component {
  render() {
    const { toasts, dispatch } = this.props
    const visibleToasts = toasts.filter(toast => toast.isVisible)

    return ReactDOM.createPortal(
      <TransitionGroup className="Toasts">
        {visibleToasts.map((k, i) => (
          <Toast
            key={i}
            handleClick={() => {
              dispatch(hideToast(k.id))
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
    toasts: state.toasts
  }
})(ToastContainer)

export default ToastContainer
