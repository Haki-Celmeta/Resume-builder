import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import DownloadSection from "../components/DownloadSection/DownloadSection";
import ChangeThemeCTA from "../components/ChangeThemeCTA/ChangeThemeCta";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DownloadSection />
      <ChangeThemeCTA />
      <Footer />
    </>
  )
}

export default HomePage;