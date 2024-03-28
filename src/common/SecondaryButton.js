import React from "react";
import { Button } from "@mui/material";

const SecondaryButton = ({sx, className="secondary-button", onClick, children}) => {
  return (
    <Button 
      sx={sx} 
      className={className} 
      variant="outlined"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default SecondaryButton;