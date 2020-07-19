import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
function HeaderNavbar() {
  const hideNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active-navbar");
  };
  return (
    <div className="navbar">
      <nav className="navbar-content">
        <div className="category-selector close-btn flex align-center justify-center ">
          <p className="category-text desktop-show-mobile-hide">Category</p>
          {/* Close Btn */}
          <div
            className="close-btn mobile-show-desktop-hide "
            onClick={hideNavbar}
          >
            <div className="close-icon-cont flex align-center justify-center">
              <BsArrowLeft />
            </div>
          </div>
        </div>
        <ul className="nav-links flex align-center">
          <li>
            <Link to="#" className="nav-link">
              Fashion
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              Auto Mechanics
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              Real Estate
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default HeaderNavbar;
