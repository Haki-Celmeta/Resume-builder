import React from "react";
import { TextField } from "@mui/material";

const Input = ({value, onChange, className, label}) => {
  return (
    <div className={`${className} field-input`}>
      <TextField value={value} onChange={onChange} id={className} label={label} variant="standard" />
    </div>
  )
}

export default Input;