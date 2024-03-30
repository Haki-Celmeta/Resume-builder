import React, { useContext} from "react";
import { TextField } from "@mui/material";
import './_profile.scss';
import { ResumeContext } from "../../App";
import PrimaryButton from "../../common/PrimaryButton";

const Profile = () => {
  const {profile, setProfile} = useContext(ResumeContext);

  const saveDetails = () => {
    localStorage.setItem('profile', profile);
  }

  return (
    <div className="profile-container">
      <div className="heading-info">
        <h2>Profile</h2>
      </div>
      <div className="profile-input-container">
        <TextField
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          id="profile"
          label="Say Something About Yourself"
          multiline
          rows={5}
          sx={{width: '100%'}}
        />
      </div>
      <div className="save-details-btn" onClick={saveDetails}>
        <PrimaryButton>Save Profile</PrimaryButton>
      </div>
    </div>
  )
}

export default Profile;