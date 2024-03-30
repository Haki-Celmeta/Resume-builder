import React, { useState } from "react";
import { createContext } from "react";

export const ResumeContext = createContext({});

const App = ({children}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [profile, setProfile] = useState('');

  const [skills, setSkills] = useState([]);

  const [experiencies, setExperiencies] = useState([]);

  const [education, setEducation] = useState([]);

  const [theme, setTheme] = useState('');

  return (
    <ResumeContext.Provider 
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        profession,
        setProfession,
        address,
        setAddress,
        country,
        setCountry,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        profile,
        setProfile,
        skills,
        setSkills,
        experiencies,
        setExperiencies,
        education,
        setEducation,
        theme,
        setTheme
      }}>
        {children}
    </ResumeContext.Provider>
  )
}

export default App;