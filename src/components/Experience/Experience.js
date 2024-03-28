import React, {useState} from "react";
import './_experience.scss';
import Input from "../Details/Input";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="experiences-input-container" style={{position: 'relative'}}>
      <div className="heading-info">
        <h2>Employment History</h2>
      </div>
      <div 
        className="experiences" 
        style={{visibility: isOpen ? 'visible': 'hidden', transition: '0.3s', opacity: isOpen ? 1: 0}}
      >
        <div className="title-location ex-lab-con">
          <Input className="employment-title" label="Job Title" />
          <Input className="employment-location" label="Job Location" />
        </div>
        <div className="employment-date ex-lab-con">
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
        <div className="employment-responsibility">
          <TextField sx={{ width: '100%' }} id="responsibility" label="Job Responsibility" variant="standard" />
        </div>
        <div className="add-respon-btn">
          <PrimaryButton className=".add-respon-btn">
            <span>Add Job Responsibility</span>
            <AddIcon />
          </PrimaryButton>
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
          visibility: !isOpen ? 'visible': 'hidden',
          transition: '0.3s',
          opacity: !isOpen ? 1: 0,
          position: 'absolute',
          top: '15%'}}>
          <AddIcon fontSize="large"/>
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Experience;