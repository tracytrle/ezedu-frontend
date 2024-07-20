import React, { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import { InputLabel } from "@mui/material";
import { Box } from "@mui/system";

function PhoneTextField() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <Box
      component="form"
      sx={{
        ml: 2,
        width: "100%",
        mr: 5,
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel>Phone</InputLabel>
      <MuiPhoneNumber
        defaultCountry={"us"}
        regions={"north-america"}
        value={phoneNumber}
        onChange={handleOnChange}
        disableAreaCodes
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
      />
    </Box>
  );
}

export default PhoneTextField;
