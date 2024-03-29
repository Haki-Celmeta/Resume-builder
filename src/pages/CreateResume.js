import React from "react";
import Details from "../components/Details/Details";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Resume from "../components/Resume/Resume";

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
      <Resume />
    </>
  )
}

export default CreateResume;