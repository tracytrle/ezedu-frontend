import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { register } from "../api/api";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";

function RegisterPage() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigator(`/login`);
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid Credentials");
      } else if (error.response.status === 409) {
        alert("User already exists");
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
            sm: "500px",
          },
          maxWidth: "90%",
          height: "500px",
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
        <Logo src={`${process.env.PUBLIC_URL}/user.png`} alt="user" size={80} />
        <Typography sx={{ mb: 5, fontFamily: "serif" }} variant="h5">
          Create a new account
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
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            sx={{
              "&:hover": { backgroundColor: theme.palette.primary.opacity },
            }}
            id="standard-basic"
            label="Password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
            required
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
          Register
        </Button>
      </Box>
    </Stack>
  );
}

export default RegisterPage;
