import React from "react";
import './_downloadSection.scss';
import SecondaryButton from '../../common/SecondaryButton';
import { Link } from "react-router-dom";

const DownloadSection = () => {
  return (
    <div className="download-cta-container">
      <h1>Download Your Resume In PDF. No Registration. Completely For Free.</h1>
      <Link to="/Resume-builder/Download">
        <SecondaryButton 
        sx={{
          color: '#fff', 
          border: '1px solid #fff', 
          fontSize: '1.1rem', 
          padding: '0.75rem 1.5rem',
          '&:hover': {border: '1px solid #ddd'}
        }}
        >
          download your resume
        </SecondaryButton>
      </Link>
    </div>
  )
}

export default DownloadSection;