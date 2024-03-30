import React from "react";
import './_navbar.scss';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import ContrastIcon from '@mui/icons-material/Contrast';
import { Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>
            <Link to="/Resume-builder">
              <div className={location.pathname === '/Resume-builder' ? 'navbar-link active' : 'navbar-link'}><EditIcon sx={{ color: '#fff' }} /></div>
            </Link>
          </li>
          <li>
            <Link to="/Resume-builder/Download">
              <div className={location.pathname === '/Resume-builder/Download' ? 'navbar-link active' : 'navbar-link'}><DownloadIcon sx={{ color: '#fff' }} /></div>
            </Link>
          </li>
          <li>
            <Link to="/Resume-builder/Themes">
              <div className={location.pathname === '/Resume-builder/Themes' ? 'navbar-link active' : 'navbar-link'}><ContrastIcon sx={{ color: '#fff' }} /></div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;