import * as React from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import DropoutMenu from "./DropoutMenu";
import Typography from "@mui/material/Typography";
import CurrentHealth from "./CurrentHealth";
import AdditionalMedical from "./AdditionalMedical";
import MedicalHistory from "./MedicalHistory";
import PhoneInput from "./PhoneInput";
import { useTranslation } from "react-i18next";

const genders = ["Male", "Female", "Not Specific"];

export default function FormPropsTextFields() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [birthDate, setBirthDate] = useState(Date.now());

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    // console.log(firstName);
  };
  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleDateOfBirth = (date) => {
    setBirthDate(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      middleName,
      lastName,
      gender,
      email,
      phone,
      address,
      city,
      country,
      birthDate,
    };
  };
  React.useEffect(() => {
    console.log("firstName", firstName);
    console.log("middleName", middleName);
    console.log("lastName", lastName);
  }, [firstName, middleName, lastName]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box sx={{ ml: 1, mb: 1 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("userInformation")} ({t("required")})
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { xs: "flex", sm: "block" },
          justifyItems: { xs: "flex-start" },
          alignItems: { xs: "center" },
          flexDirection: { xs: "column" },
        }}
      >
        <TextField
          required
          id="outlined-required"
          label={t("firstName")}
          defaultValue=""
          onChange={handleFirstNameChange}
          variant="outlined"
        />
        <TextField
          id="outlined-input"
          label={t("middleName")}
          defaultValue=""
          onChange={handleMiddleNameChange}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label={t("lastName")}
          defaultValue=""
          onChange={handleLastNameChange}
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "block",
          justifyItems: "flex-start",
        }}
      >
        <DropoutMenu menu={genders} callback={handleGenderChange} />
      </Box>
      <Box>
        <TextField
          required
          id="outlined-required"
          label={t("email")}
          onChange={handleEmailChange}
        />
        <PhoneInput callback={handlePhoneChange} sx={{ maxWidth: "80px" }} />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: { xs: "flex", sm: "block" },
          justifyItems: { xs: "flex-start" },
          alignItems: { xs: "center" },
          flexDirection: { xs: "column" },
        }}
      >
        <TextField required id="outlined-required" label={t("address")} />
        <TextField id="outlined-input" label={t("city")} />
        <TextField
          required
          id="outlined-required"
          label={t("country")}
          defaultValue="Vietnam"
        />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("currentHealth")} ({t("optional")})
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 1,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey", // Add a border with 1px width and solid black color
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <CurrentHealth />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("medicalHistory")} ({t("optional")})
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 1,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey",
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <MedicalHistory />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("additionalHealthRecord")} ({t("optional")})
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 3,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey",
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <AdditionalMedical />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: "16px",
        }}
      >
        <Button onSubmit={handleSubmit} variant="contained">
          {t("submit")}
        </Button>
      </Box>
    </Box>
  );
}
