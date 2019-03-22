import {
  GET_TWEETS,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_FAILED,
  ADD_TWEET,
  ADD_TWEET_SUCCESS,
  ADD_TWEET_FAILED
} from "../actions";

const initialState = {
  tweets: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TWEETS:
    case ADD_TWEET:
      return {
        ...state,
        loading: true
      };
    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload
      };
    case GET_TWEETS_FAILED:
    case ADD_TWEET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    case ADD_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: [action.payload, ...state.tweets]
      };
    default:
      return state;
  }
}
