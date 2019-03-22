import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ProfilePhoto extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    alt: PropTypes.string.isRequired
  };

  static defaultProps = {
    size: "24"
  };

  defaultPhoto = e => {
    e.target.src = process.env.PUBLIC_URL + "/img/default.png";
  };

  render() {
    const { size, src, alt } = this.props;
    return (
      <div className={`w-${size} h-${size}`}>
        <img
          src={src}
          onError={this.defaultPhoto}
          alt={alt}
          style={{ objectFit: "cover" }}
          className="w-full h-full rounded-full"
        />
      </div>
    );
  }
}
