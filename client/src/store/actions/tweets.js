import { updateUsersTweets } from "./auth";

export const GET_TWEETS = "GET_TWEETS";
export const GET_TWEETS_SUCCESS = "GET_TWEETS_SUCCESS";
export const GET_TWEETS_FAILED = "GET_TWEETS_FAILED";

export const ADD_TWEET = "ADD_TWEET";
export const ADD_TWEET_SUCCESS = "ADD_TWEET_SUCCESS";
export const ADD_TWEET_FAILED = "ADD_TWEET_FAILED";

export const getTweets = () => async dispatch => {
  dispatch({ type: GET_TWEETS });
  try {
    const { tweets } = await (await fetch("/api/tweets")).json();
    dispatch({ type: GET_TWEETS_SUCCESS, payload: tweets });
  } catch (error) {
    dispatch({ type: GET_TWEETS_FAILED, payload: error });
  }
};

export const addTweet = data => async (dispatch, getState) => {
  dispatch({ type: ADD_TWEET });
  try {
    const { tweet } = await (await fetch("/api/tweets", {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })).json();
    dispatch({ type: ADD_TWEET_SUCCESS, payload: tweet });
    dispatch(updateUsersTweets(tweet));
  } catch (error) {
    dispatch({ type: ADD_TWEET_FAILED, payload: error });
  }
};
