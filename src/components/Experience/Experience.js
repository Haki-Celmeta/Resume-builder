import React, { useContext, useState } from "react";
import './_experience.scss';
import Input from "../Details/Input";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";
import { ResumeContext } from "../../App";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resString, setResString] = useState('');

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [responsibilities, setResponsibilities] = useState([]);
  const { experiencies, setExperiencies } = useContext(ResumeContext);

  function addExperience() {
    if (title.length === 0 || fromDate === null || toDate === null) {
      console.log('Not title placed');
    } else {
      setExperiencies([
        ...experiencies,
        { expTitle: title, expLocation: location, expFromDate: fromDate, expToDate: toDate, expRespon: responsibilities }
      ])
      handleClick()
      setTitle('');
      setLocation('');
      setFromDate(null);
      setToDate(null);
      setResString('');
      setResponsibilities([]);
    }
  }

  const handleDateChange = (setter) => (date) => {
    setter(date);
  };

  function addResponsibility(responsibility) {
    setResponsibilities([
      ...responsibilities,
      responsibility
    ])
    setResString('');
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="experiences-input-container" style={{ position: 'relative' }}>
      <div className="heading-info">
        <h2>Employment History</h2>
      </div>
      <div
        className="experiences"
        style={{ visibility: isOpen ? 'visible' : 'hidden', transition: '0.3s', opacity: isOpen ? 1 : 0 }}
      >
        <div className="title-location ex-lab-con">
          <Input value={title} className="employment-title" label="Job Title" onChange={e => setTitle(e.target.value)} />
          <Input value={location} className="employment-location" label="Job Location" onChange={e => setLocation(e.target.value)} />
        </div>
        <div className="employment-date ex-lab-con">
          <div className="from-date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={fromDate}
                label="From"
                onChange={handleDateChange(setFromDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="to-date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={toDate}
                label="To"
                onChange={handleDateChange(setToDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="employment-responsibility" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <TextField value={resString} onChange={e => setResString(e.target.value)} sx={{ width: '100%' }} id="responsibility" label="Job Responsibility" variant="standard" />
        </div>
        <div className="add-respon-btn">
          <PrimaryButton className=".add-respon-btn" onClick={() => addResponsibility(resString)}>
            <span>Add Job Responsibility</span>
            <AddIcon />
          </PrimaryButton>
        </div>
        <div className="add-cancel-btns">
          <PrimaryButton onClick={addExperience}>Add</PrimaryButton>
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
          top: '15%'
        }}>
          <AddIcon fontSize="large" />
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Experience;