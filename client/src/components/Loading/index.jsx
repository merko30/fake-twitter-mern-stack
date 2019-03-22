import React, { PureComponent } from "react";

import "./loading.css";

export default class Loading extends PureComponent {
  render() {
    return (
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    );
  }
}
