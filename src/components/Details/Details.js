import React, { useContext } from "react";
import './_details.scss';
import Input from "./Input";
import { ResumeContext } from "../../App";

const Details = () => {
  const {setFirstName, setLastName, setProfession, setAddress, setCountry, setPhoneNumber, setEmail} = useContext(ResumeContext);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  }

  return (
    <div className="person-details-container">
      <div className="heading-info">
        <h2>Your Details</h2>
      </div>
      <div className="details-inputs-container">
        <div className="name-container">
          <Input className="first-name" label="First Name" onChange={handleChange(setFirstName)}/>
          <Input className="last-name" label="Last Name" onChange={handleChange(setLastName)}/>
          <Input className="profession" label="Profession" onChange={handleChange(setProfession)}/>
        </div>
        <div className="address-container">
          <Input className="address" label="Address" onChange={handleChange(setAddress)}/>
          <Input className="country" label="Country" onChange={handleChange(setCountry)}/>
        </div>
        <div className="contact-container">
          <Input className="phone-number" label="Phone Number" onChange={handleChange(setPhoneNumber)}/>
          <Input className="email" label="Email" onChange={handleChange(setEmail)}/>
        </div>
      </div>
    </div>
  )
}

export default Details;