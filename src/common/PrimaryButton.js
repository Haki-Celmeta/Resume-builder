import React from "react";
import Button from '@mui/material/Button';

const PrimaryButton = ({sx, className="primary-button", onClick, children}) => {
  return (
    <Button 
      sx={sx} 
      className={className} 
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton;