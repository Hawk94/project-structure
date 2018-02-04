import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { userIsAuthenticated, userIsNotAuthenticated } from 'helpers/auth'
// import { createToast } from 'actions/toasts'
import Home from 'containers/home'
import Locations from 'containers/locations'
import Protected from 'containers/protected'
import ToastContainer from 'containers/toasts'
import Login from 'containers/login'

import './App.css'

class App extends Component {
  render() {
    // const { dispatch } = this.props
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={userIsAuthenticated(Home)} />
          <Route exact path="/locations" component={userIsAuthenticated(Locations)} />
          <Route path="/protected" component={userIsAuthenticated(Protected)} />
          <Route exact path="/login" component={userIsNotAuthenticated(Login)} />
        </Switch>
        <ToastContainer />
        {//<button onClick={() => dispatch(createToast({ text: 'Lovely Toast' }))}>Create a toast</button>
      }
      </div>
    )
  }
}

export default connect()(App)
