import React, { PureComponent } from "react";
import { Route, Redirect } from "react-router-dom";

export default class GuestRoute extends PureComponent {
  render() {
    return !localStorage.getItem("token") ? (
      <Route {...this.props} />
    ) : (
      <Redirect to="/dashboard" />
    );
  }
}
