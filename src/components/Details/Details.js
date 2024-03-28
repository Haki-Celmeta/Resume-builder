import React from "react";
import './_details.scss';
import TextField from '@mui/material/TextField';
import Input from "./Input";

const Details = () => {
  return (
    <div className="person-details-container">
      <div className="heading-info">
        <h2>Your Details</h2>
      </div>
      <div className="details-inputs-container">
        <div className="name-container">
          <Input className="first-name" label="First Name"/>
          <Input className="last-name" label="Last Name"/>
          <Input className="profession" label="Profession"/>
        </div>
        <div className="address-container">
          <Input className="address" label="Address"/>
          <Input className="country" label="Country"/>
        </div>
        <div className="contact-container">
          <Input className="phone-number" label="Phone Number"/>
          <Input className="email" label="Email"/>
        </div>
      </div>
    </div>
  )
}

export default Details;