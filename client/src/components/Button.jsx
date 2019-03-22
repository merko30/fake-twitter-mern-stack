import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    const { onClick, children } = this.props;
    return (
      <button
        onClick={onClick}
        className="mr-10 p-2 bg-white text-purple-dark rounded"
      >
        {children}
      </button>
    );
  }
}
