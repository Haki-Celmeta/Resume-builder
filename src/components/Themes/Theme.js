import React, { useContext } from "react";
import './_theme.scss';
import { ResumeContext } from "../../App";

const Theme = () => {
  const {theme, setTheme} = useContext(ResumeContext);

  return (
    <div className="themes-container">
      <div 
        id="border-theme1" 
        className={`theme-border ${theme === '#2b3d4f' ? 'selected': ''}`} 
        onClick={() => setTheme('#2b3d4f')}
      >
        <div id="theme1"></div>
      </div>
      <div 
        id="border-theme2" 
        className={`theme-border ${theme === '#4f2b4a' ? 'selected': ''}`} 
        onClick={() => setTheme('#4f2b4a')}
      >
        <div id="theme2"></div>
      </div>
      <div 
        id="border-theme3" 
        className={`theme-border ${theme === '#2b4f3e' ? 'selected': ''}`} 
        onClick={() => setTheme('#2b4f3e')}
      > 
        <div id="theme3"></div>
      </div>
      <div 
        id="border-theme4" 
        className={`theme-border ${theme === '#4e4f2b' ? 'selected': ''}`}
        onClick={() => setTheme('#4e4f2b')}
      >
        <div id="theme4"></div>
      </div>
      <div 
        id="border-theme5" 
        className={`theme-border ${theme === '#7c3030' ? 'selected': ''}`} 
        onClick={() => setTheme('#7c3030')}
      >
        <div id="theme5"></div>
      </div>
      <div 
        id="border-theme6" 
        className={`theme-border ${theme === '#307c78' ? 'selected': ''}`}  
        onClick={() => setTheme('#307c78')}
      >
        <div id="theme6"></div>
      </div>
    </div>
  )
}

export default Theme;