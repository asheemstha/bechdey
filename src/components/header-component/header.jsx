import React, { Component } from "react";
import HeaderBrandLogo from "./header-mini-components/brand-logo/brand-logo";
import HeaderSearchBar from "./header-mini-components/search-bar/search-bar";
import HeaderRightMenu from "./header-mini-components/right-menu/right-menu";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="header-content">
          <div className="header-left flex align-center justify-center">
            <HeaderBrandLogo />
          </div>
          <div className="header-center flex align-center justify-center">
            <HeaderSearchBar />
          </div>
          <div className="header-right">
            <HeaderRightMenu />
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
