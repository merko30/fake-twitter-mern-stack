import history from "../../history";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const GET_CURRENT_USER = "GET_CURRENT";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAILED = "GET_CURRENT_USER_FAILED";

export const UPDATE_USERS_TWEETS = "UPDATE_USERS_TWEETS";

export const LOGOUT = "LOGOUT";

export const CLEAR_ERROR = "CLEAR_ERROR";

export const login = data => async dispatch => {
  dispatch({ type: LOGIN });
  try {
    const response = await fetch("/api/auth/login", {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    });
    const { user, token, message } = await response.json();
    if (response.ok) {
      // successful registration
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      localStorage.setItem("token", "Bearer " + token);
      history.push("/dashboard");
    } else {
      // api response
      dispatch({ type: LOGIN_FAILED, payload: { message } });
    }
  } catch (error) {
    // possible fetch failure
    dispatch({ type: LOGIN_FAILED, payload: error });
  }
};

export const register = data => async dispatch => {
  dispatch({ type: REGISTER });
  try {
    const response = await fetch("/api/auth/register", {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    });
    const { user, token, message } = await response.json();
    if (response.ok) {
      // successful registration
      dispatch({ type: REGISTER_SUCCESS, payload: user });
      localStorage.setItem("token", "Bearer " + token);
      history.push("/dashboard");
    } else {
      // api response
      dispatch({ type: REGISTER_FAILED, payload: { message } });
    }
  } catch (error) {
    // possible fetch failure
    dispatch({ type: REGISTER_FAILED, payload: error });
  }
};

export const getCurrentUser = () => async dispatch => {
  dispatch({ type: GET_CURRENT_USER });
  try {
    const user = await (await fetch("/api/auth/user", {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-type": "application/json"
      }
    })).json();
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: user });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: GET_CURRENT_USER_FAILED, payload: error });
  }
};

export const updateUsersTweets = tweet => ({
  type: UPDATE_USERS_TWEETS,
  payload: tweet
});

export const logout = () => {
  localStorage.removeItem("token");
  history.push("/");
  return {
    type: LOGOUT
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};
