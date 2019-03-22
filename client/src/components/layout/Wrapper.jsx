import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Wrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div
        style={{ height: "100vh" }}
        className="bg-orange-lightest flex items-center justify-center"
      >
        {children}
      </div>
    );
  }
}
