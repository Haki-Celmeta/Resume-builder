import React from "react";
import './_download.scss';
import Tooltip from '@mui/material/Tooltip';

const Download = () => {
  return (
    <div className="page-downloads-container">
      <div className="heading-info">
        <h2>Download as:</h2>
      </div>
      <div className="downloads">
        <Tooltip title="PDF" arrow disableInteractive placement="top">
          <div className="pdf-download download">
            <span>PDF</span>
          </div>
        </Tooltip>
        <Tooltip title="Microsoft Word" arrow disableInteractive placement="top">
          <div className="word-download download">
            <span>Microsoft Word</span>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Download;