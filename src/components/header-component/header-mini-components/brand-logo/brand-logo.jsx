import React from "react";
import BrandLogoDark from "../../../../assets/Images/BrandLogo/bechdey-logo-dark.png";
import { Link } from "react-router-dom";
function HeaderBrandLogo() {
  return (
    <div className="brand-logo-cont flex align-center justify-center">
      <Link to="/" className="brand-home-link">
        <img className="brand-logo-img" src={BrandLogoDark} alt="Bechdey" />
      </Link>
    </div>
  );
}
export default HeaderBrandLogo;
