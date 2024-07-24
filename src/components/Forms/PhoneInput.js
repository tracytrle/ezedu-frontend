import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const PhoneInput = () => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label={t("phoneNumber")}
      variant="outlined"
      fullWidth
      value={phoneNumber}
      onChange={handleChange}
    />
  );
};

export default PhoneInput;
