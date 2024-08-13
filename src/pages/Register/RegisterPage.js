import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { register, setUserHealthHistory } from "../../api/api";
import { useTheme } from "@mui/material/styles";
import Logo from "../../components/ui/Logo";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CustomizedDatePicker from "../../components/forms/CustomizedDatePicker";
import dayjs from "dayjs";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const genders = ["Male", "Female", "NS"];

function RegisterPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfBirth, setBirthDate] = useState(
    dayjs("2022-04-17").toISOString()
  );
  const [city, setCity] = useState("HCM");
  const [country, setCountry] = useState("Vietnam");

  const navigator = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateOfBirthChange = (date) => {
    setBirthDate(date.toISOString().slice(0, 10));
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const data = {
    email: email,
    phone: phone,
    password: password,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    city: city,
    country: country,
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(data);
      const userId = res.data.userId;
      localStorage.setItem("userId", userId);
      navigator(`/login`);

      const newUserHealthHistory = {
        userId: res.data.userId,
        isHeadache: false,
        isCancer: false,
        isDiabetes: false,
        isBloodClots: false,
        isArthritis: false,
        isAbnormalSkinConditions: false,
        isHighOrLowBloodPressure: false,
        isFibromyalgia: false,
        isNeckOrBackPain: false,
        isNumbness: false,
        isVaricoseVeins: false,
        isRecentInjury: false,
        isNursingOrPregnant: false,
        isDepression: false,
        isFatigue: false,
        isInsomnia: false,
        isHavingHeartDisease: false,
        isHavingSurgery: false,
        isHavingChronisIllness: false,
        isHavingHighOrLowBloodPressure: false,
        isHavingAllergies: false,
        isTakingMedication: false,
        allergies: "N/A",
        medications: "N/A",
      };
      await setUserHealthHistory(newUserHealthHistory);
    } catch (error) {
      if (error.response.status === 401) {
        alert(t("invalidCredentials"));
      } else if (error.response.status === 408) {
        alert(t("emailAlreadyExists"));
      } else if (error.response.status === 409) {
        alert(t("phoneNumberAlreadyExists"));
      }
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundImage: `url("./mainBG.jpg")`,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "700px",
          },
          height: {
            xs: "100%",
            sm: "70%",
          },
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.main,
          "& > :not(style)": { m: 1, width: "100%" },
        }}
      >
        <Logo src={`/user.png`} alt="user" size={80} />
        <Typography
          sx={{
            mb: 5,
            fontFamily: "serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h5"
        >
          {t("createAccount")}
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: { xs: "flex", sm: "block" },
            justifyContent: "center",
            alignItems: "space-around",
            flexDirection: "row",
            ml: 2,
            mr: 2,

            "& .MuiTextField-root": {
              justifyContent: "center",
              width: "35ch",
              m: 1,
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleOnSubmit}
        >
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", sm: "block" },
              justifyItems: "center",
              alignItems: "center",
              flexDirection: "row",
              mt: 5,
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
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex ",
              justifyItems: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label={t("lastName")}
              defaultValue=""
              onChange={handleLastNameChange}
              variant="outlined"
            />
            <Box sx={{ width: "100%" }}>
              <FormControl sx={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-label">
                  {t("gender")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label={t("gender")}
                  onChange={handleGenderChange}
                >
                  {genders.map((gender, index) => (
                    <MenuItem key={index} value={gender}>
                      {t(gender)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TextField
              id="outlined-required"
              label={t("phoneNumber")}
              onChange={handlePhoneChange}
              required
            />
            <CustomizedDatePicker callbackHandler={handleDateOfBirthChange} />
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
              id="outlined-required"
              label={t("email")}
              onChange={handleEmailChange}
              required
            />
            <TextField
              sx={{
                "&:hover": { backgroundColor: theme.palette.primary.opacity },
              }}
              id="standard-basic"
              label={t("password")}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-input"
              label={t("city")}
              // defaultValue="HCM"
              onChange={handleCityChange}
            />
            <TextField
              required
              id="outlined-required"
              label={t("country")}
              // defaultValue="Vietnam"
              onChange={handleCountryChange}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Button
            sx={{
              width: "20%",
              height: "40px",
              mb: 3,
              backgroundColor: theme.palette.primary.dark,
              marginTop: 2,
              "&:hover": { backgroundColor: "#A3E4EA" },
            }}
            variant="contained"
            onClick={handleOnSubmit}
          >
            {t("register")}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}

export default RegisterPage;
