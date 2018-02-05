import React from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from 'ducks/auth'
import Header from 'components/Header'

let Protected = props => {
  return (
    <div className="Section">
      <Header />
      <div className="Main">
        <p style={{ color: '#FFFFFF' }}>I am a protected route. Welcome {props.user.email}</p>
        <button
          className="Btn"
          onClick={() => {
            props.dispatch(logoutRequest())
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

Protected = connect(state => {
  return {
    user: state.auth.me
  }
})(Protected)

export default Protected
