import React from "react";
import { TextField } from "@mui/material";

const Input = ({className, label}) => {
  return (
    <div className={`${className} field-input`}>
      <TextField id={className} label={label} variant="standard" />
    </div>
  )
}

export default Input;