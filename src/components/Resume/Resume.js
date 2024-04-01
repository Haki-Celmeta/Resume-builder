import React, { useContext, useEffect} from "react";
import './_resume.scss';
import { Slider } from "@mui/material";
import { ResumeContext } from "../../App";

//TODO: Make it to download the file

const Resume = () => {

  const {
    firstName,
    lastName,
    profession,
    address,
    country,
    phoneNumber,
    email,
    profile,
    skills,
    experiencies,
    education,
    theme,
    setFirstName, 
    setLastName, 
    setProfession, 
    setAddress, 
    setCountry, 
    setPhoneNumber, 
    setEmail,
    setProfile
  } = useContext(ResumeContext);

  function convertToMonths(num) {
    switch (num) {
      case 0:
        return 'January'
      case 1:
        return 'February'
      case 2:
        return 'March'
      case 3:
        return 'April'
      case 4:
        return 'May'
      case 5:
        return 'June'
      case 6:
        return 'July'
      case 7:
        return 'August'
      case 8:
        return 'September'
      case 9:
        return 'October'
      case 10:
        return 'November'
      case 11:
        return 'December'
      default:
        return 'January'
    }
  }

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName') ? localStorage.getItem('firstName') : '');
    setLastName(localStorage.getItem('lastName') ? localStorage.getItem('lastName') : '');
    setProfession(localStorage.getItem('profession') ? localStorage.getItem('profession') : '');
    setAddress(localStorage.getItem('address') ? localStorage.getItem('address') : '');
    setCountry(localStorage.getItem('country') ? localStorage.getItem('country') : '');
    setPhoneNumber(localStorage.getItem('phoneNumber') ? localStorage.getItem('phoneNumber') : '');
    setEmail(localStorage.getItem('email') ? localStorage.getItem('email') : '');
    setProfile(localStorage.getItem('profile') ? localStorage.getItem('profile') : '');
  }, [setAddress, setCountry, setEmail, setFirstName, setLastName, setPhoneNumber, setProfession, setProfile]);

  return (
    <div className="resume-cv-container">
      <div className="resume-container">
        <div className="resume-details" style={{backgroundColor: theme ? theme : '#2b3d4f'}}>
          <div className="full-name-proffesion">
            <h3>{firstName} {lastName}</h3>
            <h4>{profession}</h4>
          </div>
          <div className="details">
            <h4>Details</h4>
            <div>
              <ul>
                <li>{address}</li>
                <li>{country}</li>
                <li>{phoneNumber}</li>
                <li>{email}</li>
              </ul>
            </div>
          </div>
          <div className="skills">
            <h4>Skills</h4>
            <ul>
              {skills.map(skill => (
                <li>
                  <div>{skill.title}</div>
                  <Slider
                    defaultValue={skill.rating}
                    step={1}
                    marks
                    min={0}
                    max={5}
                    disabled
                    sx={{
                      padding: '0px',
                      '& .MuiSlider-thumb': {
                        display: 'none',
                      },
                    }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="resume-non-details">
          <div className="profile non-det-li">
            <h4>Profile</h4>
            <p>{profile}</p>
          </div>
          <div className="employment-his non-det-li">
            <h4>Employment History</h4>
            <div className="jobs-list">
              {experiencies.map(experience => (
                <div className="job">
                  <h5>{experience.expTitle}, {experience.expLocation}</h5>
                  <div className="dates">
                    <span>{convertToMonths(experience.expFromDate.$M)} {experience.expFromDate.$D} {experience.expFromDate.$y}</span>
                    <span> - </span>
                    <span>{convertToMonths(experience.expToDate.$M)} {experience.expToDate.$D} {experience.expToDate.$y}</span>
                  </div>
                  <ul>
                    {experience.expRespon.map(responsibility => (
                      <li>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="education non-det-li">
            <h4>Education</h4>
            <div className="educations">
              {education.map(edu => (
                <div className="edu">
                  <h5>{edu.eduTitle}, {edu.eduLocation}</h5>
                  <div className="dates">
                    <span>{convertToMonths(edu.eduFromDate.$M)} {edu.eduFromDate.$D} {edu.eduFromDate.$y}</span>
                    <span> - </span>
                    <span>{convertToMonths(edu.eduToDate.$M)} {edu.eduToDate.$D} {edu.eduToDate.$y}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;