import React from "react";
import './_changeThemeCta.scss';
import SecondaryButton from "../../common/SecondaryButton";
import { Link } from "react-router-dom";

const ChangeThemeCTA = () => {
  return (
    <div className="theme-cta-container">
      <h1>Choose One of the Themes that Look More Fit to You.</h1>
      <Link to="/Resume-builder/Themes">
        <SecondaryButton sx={{ fontSize: '1.1rem', padding: '0.75rem 1.5rem' }}>Change Resume Theme</SecondaryButton>
      </Link>
    </div>
  )
}

export default ChangeThemeCTA;