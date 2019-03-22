import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  UPDATE_USERS_TWEETS,
  LOGOUT,
  CLEAR_ERROR
} from "../actions";

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user
      };
    case GET_CURRENT_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    case LOGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    case UPDATE_USERS_TWEETS:
      return {
        ...state,
        user: {
          ...state.user,
          tweets: [action.payload, ...state.user.tweets]
        }
      };
    case LOGOUT: {
      return {
        ...state,
        user: null
      };
    }
    case CLEAR_ERROR: {
      return {
        ...state,
        error: null
      };
    }
    default:
      return state;
  }
}
