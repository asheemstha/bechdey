import React from "react";
import { FiShoppingBag, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GrCompare } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons/lib";
function HeaderRightMenu() {
  const showNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active-navbar");
  };
  return (
    <IconContext.Provider
      value={{
        className: "right-menu-icons",
      }}
    >
      <div className="header-right-menu flex">
        <div className="burger-menu right-menus mobile-show-desktop-hide">
          <div className="right-menu-links" onClick={showNavbar}>
            <div className="right-menu-links-content">
              <IoIosMenu />
              <p className="right-menu-texts">Menu</p>
            </div>
          </div>
        </div>
        <div className="compare-menu right-menus desktop-show-mobile-hide">
          <Link to="#" className="right-menu-links">
            <div className="right-menu-links-content">
              <GrCompare />
              <p className="right-menu-texts">Compare</p>
            </div>
          </Link>
        </div>
        <div className="signin-up-menu right-menus">
          <Link to="#" className="right-menu-links">
            <div className="right-menu-links-content">
              <FiLogIn />
              <p className="right-menu-texts">Sign Up/In</p>
            </div>
          </Link>
        </div>
        <div className="cart-menu right-menus">
          <Link to="#" className="right-menu-links">
            <div className="right-menu-links-content">
              <FiShoppingBag />
              <p className="right-menu-texts">Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default HeaderRightMenu;
