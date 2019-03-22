import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Error extends PureComponent {
  static propTypes = {
    error: PropTypes.string.isRequired
  };
  render() {
    const { error } = this.props;
    return <p className="text-red-darker font-bold">{error}</p>;
  }
}
