import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

export default class Input extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    placeholder: "",
    error: null
  };

  render() {
    const { name, value, handleChange, label, placeholder, error } = this.props;
    return (
      <div className="my-2">
        {label && (
          <label className="block uppercase text-purple-darker" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          type="text"
          style={{ outline: "none" }}
          className="py-2 my-1 w-full border-b border-purple-lighter"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {error && <Error error={error} />}
      </div>
    );
  }
}
