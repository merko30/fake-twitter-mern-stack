import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Tabs from "./Tabs";
import TweetItem from "./TweetItem";

export default class TweetList extends PureComponent {
  static propTypes = {
    user: PropTypes.string.isRequired,
    tweets: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.shape({
          _id: PropTypes.string.isRequired
        })
      })
    ),
    current: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired
  };

  render() {
    const { tweets, current, switchTab, user } = this.props;
    const userTweets =
      tweets && tweets.filter(tweet => tweet.author._id === user);
    return (
      <div className="w-full">
        <Tabs current={current} onClick={switchTab} />
        {current === "USER"
          ? userTweets.map(tweet => <TweetItem tweet={tweet} key={tweet._id} />)
          : tweets.map(tweet => <TweetItem tweet={tweet} key={tweet._id} />)}
      </div>
    );
  }
}
