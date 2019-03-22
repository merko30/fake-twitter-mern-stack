import React, { PureComponent } from "react";
import NavItem from "./NavItem";

export default class Tabs extends PureComponent {
  render() {
    const { onClick, current } = this.props;
    const areAllActive = current === "ALL";
    const areUsersActive = current === "USER";
    return (
      <header className="flex items-center justify-around list-reset mb-6">
        <NavItem onClick={() => onClick("ALL")} active={areAllActive}>
          All tweets
        </NavItem>
        <NavItem onClick={() => onClick("USER")} active={areUsersActive}>
          My tweets
        </NavItem>
      </header>
    );
  }
}
