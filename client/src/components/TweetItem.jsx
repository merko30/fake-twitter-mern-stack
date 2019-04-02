import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";
import ProfilePhoto from "./ProfilePhoto";

export default class TweetItem extends PureComponent {
  static propTypes = {
    tweet: PropTypes.shape({
      author: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        profilePhoto: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { tweet } = this.props;
    const {
      _id,
      author: { profilePhoto, username },
      createdAt,
      text
    } = tweet;
    return (
      <div className="flex mt-2" key={_id}>
        <ProfilePhoto src={profilePhoto} alt={username} size="16" />
        <div className="ml-5 mt-1 flex-1">
          <h3 className="font-bold inline">{username}</h3>
          <p className="font-sm font-italic inline ml-4">
            {distanceInWordsToNow(createdAt)} ago
          </p>
          <h4 style={{ wordBreak: "break-word" }}>{text}</h4>
        </div>
      </div>
    );
  }
}
