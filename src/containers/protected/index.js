import React from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from 'actions/auth'

let Protected = props => {
  return (
    <div>
      I am a protected route. Welcome {props.user.email}
      <button
        onClick={() => {
          props.dispatch(logoutRequest())
        }}
      >
        Logout
      </button>
    </div>
  )
}

Protected = connect(state => {
  return {
    user: state.auth.me
  }
})(Protected)

export default Protected
