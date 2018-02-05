import 'components/Section'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { userIsAuthenticated, userIsNotAuthenticated } from 'helpers/auth'
import Home from 'containers/Home'
import Locations from 'containers/Locations'
import Protected from 'containers/Protected'
import Login from 'containers/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={userIsAuthenticated(Home)} />
          <Route exact path="/locations" component={userIsAuthenticated(Locations)} />
          <Route path="/protected" component={userIsAuthenticated(Protected)} />
          <Route exact path="/login" component={userIsNotAuthenticated(Login)} />
        </Switch>
      </div>
    )
  }
}

export default connect()(App)
