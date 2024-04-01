import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Resume from "../components/Resume/Resume";
import Download from "../components/Download/Download";

const DownloadResume = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <Navbar />
      <Download />
      <Resume />
    </>
  )
}

export default DownloadResume;