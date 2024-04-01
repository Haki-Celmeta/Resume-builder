import React from "react";
import { TextField } from "@mui/material";

const Input = ({ sx, value, onChange, className, label, helperText, FormHelperTextProps}) => {
  return (
    <div className={`${className} field-input`}>
      <TextField 
        sx={sx}
        FormHelperTextProps={FormHelperTextProps} 
        helperText={helperText} 
        value={value} 
        onChange={onChange} 
        id={className} 
        label={label} 
        variant="standard" 
      />
    </div>
  )
}

export default Input;