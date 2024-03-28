import React from "react";
import Details from "../components/Details/Details";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";

const CreateResume = () => {
  return (
    <>
      <Navbar />
      <Details />
      <Profile />
      <div className="skills-experience-container">
        <Skills />
        <Experience />
      </div>
      <Education />
    </>
  )
}

export default CreateResume;