import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { destroyToast } from "./../../ducks/toasts";

import "./toasts.css";

const Toast = props => (
  <CSSTransition
    timeout={1000}
    classNames="fade"
    in={props.in}
    onExited={props.onExited}
  >
    <div className="o-toast" onClick={props.handleClick}>
      {props.text}
    </div>
  </CSSTransition>
);

class ToastContainer extends Component {
  render() {
    const { toasts, dispatch } = this.props;

    return ReactDOM.createPortal(
      <TransitionGroup className="o-toasts">
        {toasts.map((k, i) => (
          <Toast
            key={i}
            handleClick={() => {
              dispatch(destroyToast(k.id));
            }}
            {...k}
          />
        ))}
      </TransitionGroup>,
      document.getElementById("toasts")
    );
  }
}

ToastContainer = connect(state => {
  return {
    toasts: state.toasts.toasts
  };
})(ToastContainer);

export default ToastContainer;
