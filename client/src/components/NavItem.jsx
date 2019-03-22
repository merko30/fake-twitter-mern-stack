import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class NavItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
  };

  render() {
    const { children, onClick, active } = this.props;
    const activeClassName = active ? "border-b-2 border-purple-darker" : "";
    return (
      <div
        onClick={onClick}
        className={
          "bg-white cursor-pointer text-purple-darker uppercase font-bold border-b-2 border-transparent text-center w-full p-6 " +
          activeClassName
        }
      >
        {children}
      </div>
    );
  }
}
