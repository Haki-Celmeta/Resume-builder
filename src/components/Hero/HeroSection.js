import React from "react";
import './_heroSection.scss';
import PrimaryButton from '../../common/PrimaryButton';
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to('#hero-section', {
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
      opacity: 1
    })

    gsap.to('.h_stagger', {
      stagger: 1,
      delay: 0.5
    })
  }, [])

  return (
    <div id="hero-section" className="hero-section-container">
      <h1 id="hero-title">Create Your Resume Within Seconds. Just Fill the Form and It is Created.</h1>
      <Link to="/Resume-builder/Editor">
        <PrimaryButton sx={{fontSize: '1.1rem', padding: '0.75rem 1.5rem'}}>Build My Resume</PrimaryButton>
      </Link>
    </div>
  )
}

export default HeroSection;