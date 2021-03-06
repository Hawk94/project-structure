import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './Toast.css'

const Toast = props => (
  <CSSTransition timeout={1000} classNames="fade" in={props.in} onExited={props.onExited}>
    <div className="toast" onClick={props.handleClick}>
      {props.text}
    </div>
  </CSSTransition>
)

export default Toast
