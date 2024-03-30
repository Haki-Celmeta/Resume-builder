import React, { useContext } from "react";
import './_details.scss';
import Input from "./Input";
import { ResumeContext } from "../../App";
import PrimaryButton from "../../common/PrimaryButton";

const Details = () => {
  const { 
    firstName,
    lastName,
    profession,
    address,
    country,
    phoneNumber,
    email,
    setFirstName, 
    setLastName, 
    setProfession, 
    setAddress, 
    setCountry, 
    setPhoneNumber, 
    setEmail 
  } = useContext(ResumeContext);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  }

  const saveDetails = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('profession', profession);
    localStorage.setItem('address', address);
    localStorage.setItem('country', country);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);
  }

  return (
    <div className="person-details-container">
      <div className="heading-info">
        <h2>Your Details</h2>
      </div>
      <div className="details-inputs-container">
        <div className="name-container">
          <Input value={firstName} className="first-name" label="First Name" onChange={handleChange(setFirstName)} />
          <Input value={lastName} className="last-name" label="Last Name" onChange={handleChange(setLastName)} />
          <Input value={profession} className="profession" label="Profession" onChange={handleChange(setProfession)} />
        </div>
        <div className="address-container">
          <Input value={address} className="address" label="Address" onChange={handleChange(setAddress)} />
          <Input value={country} className="country" label="Country" onChange={handleChange(setCountry)} />
        </div>
        <div className="contact-container">
          <Input value={phoneNumber} className="phone-number" label="Phone Number" onChange={handleChange(setPhoneNumber)} />
          <Input value={email} className="email" label="Email" onChange={handleChange(setEmail)} />
        </div>
      </div>
      <div className="save-details-btn" onClick={saveDetails}>
        <PrimaryButton>Save Details</PrimaryButton>
      </div>
    </div>
  )
}

export default Details;