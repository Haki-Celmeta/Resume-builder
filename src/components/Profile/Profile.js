import React from "react";
import Input from "../Details/Input";
import { TextField } from "@mui/material";
import './_profile.scss';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="heading-info">
        <h2>Profile</h2>
      </div>
      <div className="profile-input-container">
        <TextField
          id="profile"
          label="Say Something About Yourself"
          multiline
          rows={5}
          sx={{width: '100%'}}
        />
      </div>
    </div>
  )
}

export default Profile;