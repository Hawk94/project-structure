import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { userIsAuthenticated, userIsNotAuthenticated } from 'helpers/auth'
import { createToast } from 'ducks/toasts'
import Header from 'components/header'
import Home from 'containers/home'
import Protected from 'containers/protected'
import ToastContainer from 'containers/toasts'
import Login from 'containers/login'

class App extends Component {
  render() {
    const { dispatch } = this.props

    return (
      <div className="App">
        <Header />
        <ToastContainer />
        <main className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/protected" component={userIsAuthenticated(Protected)} />
            <Route path="/login" component={userIsNotAuthenticated(Login)} />
          </Switch>
        </main>
        <button onClick={() => dispatch(createToast({ text: 'Lovely Toast' }))}>
          Create a toast
        </button>
      </div>
    )
  }
}

export default connect()(App)
