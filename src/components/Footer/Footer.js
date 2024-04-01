import React from "react";
import './_footer.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { TextField } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-part-container">
        <div className="first-part">
          <AutoAwesomeIcon />
          <ul>
            <li><Link to="/Resume-builder">Editor</Link></li>
            <li><Link to="/Resume-builder/Download">Download</Link></li>
            <li><Link to="/Resume-builder/Themes">Themes</Link></li>
          </ul>
        </div>
        <div className="second-part">
          <TextField 
            variant="standard"
            label="Enter your email:"
            helperText="Join our newsletter"
          />
          <PrimaryButton>Subscribe</PrimaryButton>
        </div>
      </div>
      <div className="second-part-container">
        <div>
          @2024 Resume Builder. All right reserved
        </div>
        <div>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;