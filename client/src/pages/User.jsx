import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Wrapper from "../components/layout/Wrapper";
import Register from "../components/Register";
import Login from "../components/Login";
import Error from "../components/Error";

import { login, register, clearError } from "../store/actions";
import validateField from "../utils/validateField";

class User extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
  };

  state = {
    data: {
      username: "",
      name: "",
      profilePhoto: ""
    },
    errors: {},
    register: false
  };

  // validates register data
  validateRegister = data => {
    const errors = {};

    validateField(errors, "name", data.name);
    validateField(errors, "username", data.username, 6);
    validateField(errors, "profilePhoto", data.profilePhoto, 10);

    return errors;
  };

  // validates login data
  validateLogin = data => {
    const errors = {};

    validateField(errors, "username", data.username);

    return errors;
  };

  // handles input change
  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [e.target.name]: e.target.value
      }
    }));
  };

  //  calls validation function and register action
  register = data => {
    const { register } = this.props;
    const errors = this.validateRegister(data);
    this.setState(
      {
        errors
      },
      () => {
        if (Object.keys(errors).length === 0) {
          register(data);
        }
      }
    );
  };

  // calls validation function and login action
  login = data => {
    const { username } = data;
    const { login } = this.props;
    const errors = this.validateLogin({ username });
    this.setState(
      {
        errors
      },
      () => {
        if (Object.keys(errors).length === 0) {
          login(data);
        }
      }
    );
  };

  // clears inputs and error object
  clearInputs = () => {
    this.setState(prevState => ({
      ...prevState,
      data: {
        name: "",
        username: "",
        profilePhoto: ""
      },
      errors: {}
    }));
  };

  // switches register and login components
  toggleRegister = () => {
    const { clearError } = this.props;
    clearError();
    this.clearInputs();
    this.setState(prevState => ({
      register: !prevState.register
    }));
  };

  render() {
    const { register, data, errors } = this.state;
    const { error } = this.props;
    return (
      <Wrapper>
        <div className="p-16 shadow bg-white">
          {error && <Error error={error} />}
          {register ? (
            <Register
              errors={errors}
              onSubmit={this.register}
              data={data}
              onClick={this.toggleRegister}
              handleChange={this.handleChange}
            />
          ) : (
            <Login
              errors={errors}
              onSubmit={this.login}
              data={{ username: data.username }}
              onClick={this.toggleRegister}
              handleChange={this.handleChange}
            />
          )}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ auth: { loading, error } }) => ({ loading, error });

export default connect(
  mapStateToProps,
  { login, register, clearError }
)(User);
