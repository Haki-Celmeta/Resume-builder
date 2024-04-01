import React from "react";
import './_download.scss';
import Tooltip from '@mui/material/Tooltip';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Download = () => {

  const downloadPdfDocument = () => {
    const input = document.querySelector('.resume-cv-container .resume-container');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("resume.pdf");
      })
  }

  return (
    <div className="page-downloads-container">
      <div className="downloads">
        <Tooltip title="PDF" arrow disableInteractive placement="top">
          <div className="pdf-download download" onClick={downloadPdfDocument}>
            <span>Download PDF</span>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Download;