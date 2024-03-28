import React from "react";
import './_navbar.scss';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import ContrastIcon from '@mui/icons-material/Contrast';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li><div><EditIcon sx={{color: '#fff'}}/></div></li>
          <li><div><DownloadIcon sx={{color: '#fff'}}/></div></li>
          <li><div><ContrastIcon sx={{color: '#fff'}}/></div></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;