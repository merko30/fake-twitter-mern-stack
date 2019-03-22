import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SubmitButton extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const { children, disabled } = this.props;
    const disabledClass = disabled
      ? "bg-grey hover:bg-grey hover:border-grey"
      : "hover:border-purple-darker border border-white hover:bg-white bg-purple-darker hover:text-purple-darker text-white";
    return (
      <button
        type="submit"
        disabled={disabled}
        style={{ transition: "all 0.2s ease-in-out" }}
        className={"p-2 mx-2 rounded-lg my-2 " + disabledClass}
      >
        {children}
      </button>
    );
  }
}
