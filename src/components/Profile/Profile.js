import React, { useContext } from "react";
import { TextField } from "@mui/material";
import './_profile.scss';
import { ResumeContext } from "../../App";

const Profile = () => {
  const {setProfile} = useContext(ResumeContext);

  return (
    <div className="profile-container">
      <div className="heading-info">
        <h2>Profile</h2>
      </div>
      <div className="profile-input-container">
        <TextField
          onChange={(e) => setProfile(e.target.value)}
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