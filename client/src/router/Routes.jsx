import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <GuestRoute exact component={User} path="/" />
        <PrivateRoute component={Dashboard} path="/dashboard" />
      </Switch>
    );
  }
}

export default Routes;
