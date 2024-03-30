import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Resume from "../components/Resume/Resume";
import Download from "../components/Download/Download";

const DownloadResume = () => {
  return (
    <>
      <Navbar />
      <Download />
      <Resume />
    </>
  )
}

export default DownloadResume;