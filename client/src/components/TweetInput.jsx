import React, { PureComponent } from "react";
import SubmitButton from "./SubmitButton";
import PropTypes from "prop-types";

export default class TweetInput extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    placeholder: "",
    error: null
  };

  render() {
    const {
      name,
      value,
      handleChange,
      placeholder,
      onSubmit,
      error
    } = this.props;
    return (
      <form
        className="flex items-center border-b border-purple-lightest pr-10 bg-white"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(value);
        }}
      >
        <input
          className="w-full px-4 pt-8 pb-6 outline-none focus:bg-white bg-white text-purple-darker "
          name={name}
          autoComplete="off"
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
        />
        {error && <p className="text-red-darker">{error}</p>}
        <SubmitButton disabled={value.length === 0}>Tweet</SubmitButton>
      </form>
    );
  }
}
