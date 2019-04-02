import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ProfilePhoto from "./ProfilePhoto";

export default class UserInfo extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tweets: PropTypes.array.isRequired,
      profilePhoto: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  };

  render() {
    const {
      user: { username, tweets, name, profilePhoto }
    } = this.props;
    return (
      <div className="md:mr-2 md:w-1/4 p-10 mx-auto">
        <ProfilePhoto src={profilePhoto} alt={username} size="24" />
        <h3 className="my-2 uppercase">{name}</h3>
        <p className="font-light">@{username}</p>
        <p className="my-2 uppercase">Tweets: {tweets.length}</p>
      </div>
    );
  }
}
