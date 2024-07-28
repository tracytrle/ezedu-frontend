import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/api";
import { useTheme } from "@mui/material/styles";
import Logo from "../../components/ui/Logo";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function RegisterPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigator = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, phone, password);
      navigator(`/login`);
    } catch (error) {
      if (error.response.status === 401) {
        alert(t("invalidCredentials"));
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
        display: "flex",
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
          maxWidth: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.main,
        }}
        // onSubmit={handleOnSubmit}
      >
        <Logo src={`/user.png`} alt="user" size={80} />
        <Typography sx={{ mb: 5, fontFamily: "serif" }} variant="h5">
          {t("createAccount")}
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              "&:hover": { backgroundColor: theme.palette.primary.opacity },
            }}
            id="standard-basic"
            label={t("email")}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            sx={{
              "&:hover": { backgroundColor: theme.palette.primary.opacity },
            }}
            id="standard-basic"
            label={t("phoneNumber")}
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <TextField
            sx={{
              "&:hover": { backgroundColor: theme.palette.primary.opacity },
            }}
            id="standard-basic"
            label={t("password")}
            variant="standard"
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
        <Button
          sx={{
            width: "80%",
            height: "40px",
            backgroundColor: theme.palette.primary.dark,
            marginTop: 10,
            "&:hover": { backgroundColor: "#A3E4EA" },
          }}
          variant="contained"
          onClick={handleOnSubmit}
        >
          {t("register")}
        </Button>
      </Box>
    </Stack>
  );
}

export default RegisterPage;
