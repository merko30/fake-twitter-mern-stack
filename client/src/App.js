import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import history from "./history";
import store from "./store";

import Routes from "./router/Routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
