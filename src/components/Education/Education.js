import React, { useContext, useState } from "react";
import './_education.scss';
import Input from "../Details/Input";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";
import AddIcon from '@mui/icons-material/Add';
import { TextField } from "@mui/material";
import { ResumeContext } from "../../App";

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [titleEmpty, setTitleEmpty] = useState('');

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const { education, setEducation } = useContext(ResumeContext);

  function addEducation() {
    if (title.trim().length === 0) {
      setTitleEmpty('Enter education title');
    } else if (fromDate === null) {
      setTitleEmpty('');
      console.log('From date not given');
    } else if (toDate === null) {
      setTitleEmpty('');
      console.log('To date not given');
    } else {
      setEducation([
        ...education,
        { eduTitle: title, eduLocation: location, eduFromDate: fromDate, eduToDate: toDate }
      ])
      setTitleEmpty('');
      handleClick();
      setTitle('');
      setLocation('');
      setFromDate(null);
      setToDate(null);
    }
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const handleDateChange = (setter) => (date) => {
    setter(date);
  };

  return (
    <div className="education-input-container" style={{ position: 'relative' }}>
      <div className="heading-info">
        <h2>Education</h2>
      </div>
      <div
        className="education-inputs"
        style={{ visibility: isOpen ? 'visible' : 'hidden', transition: '0.3s', opacity: isOpen ? 1 : 0 }}
      >
        <div>
          <Input
            sx={{ display: 'flex', flexDirection: 'column' }}
            FormHelperTextProps={{ sx: { color: 'rgb(202, 61, 61)' } }}
            helperText={titleEmpty ? titleEmpty : ''}
            value={title}
            className='education-level'
            label='Education Level'
            onChange={e => setTitle(e.target.value)}
          />
          <Input value={location} className='education-location' label='Education Location' onChange={e => setLocation(e.target.value)} />
        </div>
        <div className="education-date">
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
        <div className="add-cancel-btns">
          <PrimaryButton onClick={addEducation}>Add</PrimaryButton>
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