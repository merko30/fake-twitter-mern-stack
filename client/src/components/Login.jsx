import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

export default class Register extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object
  };

  static defaultProps = {
    errors: {},
    data: {}
  };

  render() {
    const { onClick, onSubmit, data, handleChange, errors } = this.props;
    const { username } = data;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        <Input
          label="Username"
          name="username"
          value={username}
          error={!!errors.username && errors.username}
          handleChange={handleChange}
        />
        <div className="flex items-center">
          <SubmitButton>Sign in</SubmitButton>
          <span
            className="font-bold text-purple-darker cursor-pointer"
            onClick={onClick}
          >
            No account ?
          </span>
        </div>
      </form>
    );
  }
}
