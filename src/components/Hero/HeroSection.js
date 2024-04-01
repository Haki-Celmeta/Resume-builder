import React from "react";
import './_heroSection.scss';
import PrimaryButton from '../../common/PrimaryButton';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <h1>Create Your Resume Within Seconds. Just Fill the Form and It is Created.</h1>
      <Link to="/Resume-builder/Editor">
        <PrimaryButton sx={{fontSize: '1.1rem', padding: '0.75rem 1.5rem'}}>Build My Resume</PrimaryButton>
      </Link>
    </div>
  )
}

export default HeroSection;