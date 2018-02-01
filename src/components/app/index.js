import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "components/header";
import Home from "containers/home";
import Protected from "containers/protected";
import ToastContainer from "containers/toasts";
import Login from "containers/login";

import './App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(load());
  }

  render() {
    const { dispatch, loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <div className="App">
          <Header />

          <ToastContainer />

          <main className="c-main">
            <Route exact path="/" component={Home} />
            <Route path="/protected" component={Protected} />
            <Route path="/login" component={Login} />
          </main>

          <button
            onClick={() => dispatch(createToast({ text: "Lovely Toast" }))}
          >
            Do a toast
          </button>
        </div>
      </Router>
    );
  }
}

App = connect(state => {
  return {
    loading: state.app.loading
  };
})(App);

export default App;
