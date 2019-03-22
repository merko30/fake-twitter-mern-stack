import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";

import {
  getTweets,
  getCurrentUser,
  addTweet,
  logout
} from "../../store/actions";

import TweetList from "../TweetList";
import UserInfo from "../UserInfo";
import TweetInput from "../TweetInput";
import Button from "../Button";
import Loading from "../Loading";

const USER = "USER";

class UserContainer extends Component {
  state = {
    current: USER,
    loadingUser: true,
    tweet: ""
  };

  componentDidMount = () => {
    const { getTweets, getCurrentUser } = this.props;
    if (localStorage.getItem("token")) {
      const id = jwt.decode(localStorage.getItem("token").split(" ")[1]).id;
      getCurrentUser(id);
    }
    getTweets();
  };

  toggleTweets = whichTweets => {
    this.setState({
      current: whichTweets
    });
  };

  handleChange = e => {
    e.persist();

    this.setState({
      tweet: e.target.value
    });
  };

  addTweet = tweet => {
    const { addTweet } = this.props;
    addTweet({ text: tweet });
    this.setState({ tweet: "" });
  };

  render() {
    const { current, tweet } = this.state;
    const { tweets, user, logout, error, authLoading, loading } = this.props;
    return (
      <div style={{ minHeight: "100%" }} className="mb-6">
        <div className="p-2 text-right">
          <Button onClick={logout}>Logout</Button>
        </div>
        <div className="flex w-full h-auto">
          {user && !error && <UserInfo user={user} />}
          {authLoading && <Loading />}
          <div className="w-3/4">
            {tweets && user && (
              <Fragment>
                <TweetInput
                  onSubmit={this.addTweet}
                  handleChange={this.handleChange}
                  name="tweet"
                  value={tweet}
                  placeholder="Tweet something"
                  error={error}
                />
                <TweetList
                  tweets={tweets}
                  user={user._id}
                  current={current}
                  switchTab={this.toggleTweets}
                />
              </Fragment>
            )}
            {loading && <Loading />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets: { loading, tweets, error }, auth }) => ({
  authLoading: auth.loading,
  authError: auth.error,
  user: auth.user,
  loading,
  tweets,
  error
});

export default connect(
  mapStateToProps,
  { getTweets, getCurrentUser, addTweet, logout }
)(UserContainer);
