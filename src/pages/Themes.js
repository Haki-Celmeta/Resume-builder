import React, {useEffect} from "react";
import Navbar from "../components/Navbar/Navbar";
import Resume from "../components/Resume/Resume";
import Theme from "../components/Themes/Theme";

const Themes = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <Navbar />
      <Theme />
      <Resume />
    </>
  )
}

export default Themes