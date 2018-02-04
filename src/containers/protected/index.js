import React from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from 'actions/auth'
import Header from 'components/header'

let Protected = props => {
  return [
    <Header />,
    <div className="Main">
      <p>I am a protected route. Welcome {props.user.email}</p>
      <button
        className="Btn"
        onClick={() => {
          props.dispatch(logoutRequest())
        }}
      >
        Logout
      </button>
    </div>
  ]
}

Protected = connect(state => {
  return {
    user: state.auth.me
  }
})(Protected)

export default Protected
