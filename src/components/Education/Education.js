import React, { useState } from "react";
import './_education.scss';
import Input from "../Details/Input";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";
import AddIcon from '@mui/icons-material/Add';

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="education-input-container" style={{position: 'relative'}}>
      <div className="heading-info">
        <h2>Education</h2>
      </div>
      <div 
        className="education-inputs"
        style={{visibility: isOpen ? 'visible': 'hidden', transition: '0.3s', opacity: isOpen ? 1: 0}}
      >
        <div>
          <Input className='education-level' label='Education Level' />
          <Input className='education-location' label='Education Location' />
        </div>
        <div className="education-date">
          <div className="from-date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="From" />
            </LocalizationProvider>
          </div>
          <div className="to-date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="To" />
            </LocalizationProvider>
          </div>
        </div>
        <div className="add-cancel-btns">
          <PrimaryButton onClick={handleClick}>Add</PrimaryButton>
          <SecondaryButton onClick={handleClick}>Cancel</SecondaryButton>
        </div>
      </div>
      <div
        onClick={handleClick}
        className="add-experience-btn"
      >
        <PrimaryButton sx={{
          padding: '0.75rem',
          visibility: !isOpen ? 'visible' : 'hidden',
          transition: '0.3s',
          opacity: !isOpen ? 1 : 0,
          position: 'absolute',
          top: '25%'
        }}>
          <AddIcon fontSize="large" />
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Education