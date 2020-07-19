import React from "react";
import BrandLogoDark from "../../../../assets/Images/BrandLogo/bechdey-logo-dark.png";
function HeaderBrandLogo() {
  return (
    <div className="brand-logo-cont flex align-center justify-center">
      <img className="brand-logo-img" src={BrandLogoDark} alt="Bechdey" />
    </div>
  );
}
export default HeaderBrandLogo;
