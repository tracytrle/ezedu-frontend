import React, { useState } from "react";
import { TextField } from "@mui/material";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Phone Number"
      variant="outlined"
      fullWidth
      value={phoneNumber}
      onChange={handleChange}
    />
  );
};

export default PhoneInput;
