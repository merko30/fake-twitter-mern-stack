import React, { PureComponent } from "react";
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends PureComponent {
  render() {
    return localStorage.getItem("token") ? (
      <Route {...this.props} />
    ) : (
      <Redirect to="/" />
    );
  }
}
