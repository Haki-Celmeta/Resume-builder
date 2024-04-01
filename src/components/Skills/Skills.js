import React, { useContext, useState } from "react";
import './_skills.scss';
import { TextField } from "@mui/material";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import { ResumeContext } from "../../App";

const Skills = () => {
  const [ratingValue, setRatingValue] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  const [skillEmpty, setSkillEmpty] = useState('');

  const [skillTitle, setSkillTitle] = useState('');
  const {skills, setSkills} = useContext(ResumeContext);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function addSkill() {
    if(skillTitle.trim().length === 0) {
      setSkillEmpty('Type something here');
    } else {
      setSkills([
        ...skills,
        {title: skillTitle, rating: ratingValue}
      ])
      setSkillEmpty('');
      setSkillTitle('');
      setRatingValue(3);
      handleClick();
    }
  }

  function convertRatingToText(rating) {
    switch (rating) {
      case '1':
        return 'Very little'
      case '2':
        return 'Little'
      case '3':
        return 'Good'
      case '4':
        return 'Very good'
      case '5':
        return 'Excellent'
      default:
        return 'Good'
    }
  }

  const ratingText = convertRatingToText(ratingValue);

  return (
    <div className="skills-input-container" style={{position: 'relative'}}>
      <div className="heading-info">
        <h2>Skills</h2>
      </div>
      <div 
        className="skill-add-container" 
        style={{visibility: isOpen ? 'visible': 'hidden', transition: '0.3s', opacity: isOpen ? 1: 0}}
      >
        <div className={`skill-title`}>
          <TextField
            onChange={e => setSkillTitle(e.target.value)}
            value={skillTitle}
            sx={{ width: '100%', padding: '0px' }}
            FormHelperTextProps={{ sx: { color: 'rgb(202, 61, 61)' } }}
            helperText={skillEmpty ? skillEmpty : ""}
            id='skill-title'
            label="Skill"
            variant="standard"
          />
        </div>
        <div className="rating-container">
          <Rating value={ratingValue} onChange={e => setRatingValue(e.target.value)} name="size-medium" defaultValue={3} />
          <label>{ratingText}</label>
        </div>
        <div className="add-cancel-btns">
          <PrimaryButton onClick={addSkill}>Add</PrimaryButton>
          <SecondaryButton onClick={handleClick}>Cancel</SecondaryButton>
        </div>
      </div>
      <div 
        onClick={handleClick} 
        className="add-skill-btn" 
      >
        <PrimaryButton sx={{ 
          padding: '0.75rem',
          visibility: !isOpen ? 'visible': 'hidden',
          transition: '0.3s',
          opacity: !isOpen ? 1: 0,
          position: 'absolute',
          top: '15%',
          '@media (max-width: 780px)': {
            top: '25%'
          }}}>
          <AddIcon fontSize="large" />
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Skills;