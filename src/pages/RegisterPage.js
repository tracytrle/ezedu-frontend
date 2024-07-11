import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { register } from "../api/api";

function RegisterPage() {
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

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await register(email, password);
  //     alert("User registered successfully");
  //     navigator(`/homepage`);
  //   } catch (error) {
  //     if (error.response.status === 401) {
  //       alert("Invalid Credentials");
  //     }
  //   }
  // };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#95a5a6",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          backgroundColor: "#58B19F",
        }}
        // onSubmit={handleOnSubmit}
      >
        <Typography sx={{ mb: 5, fontFamily: "serif" }} variant="h4">
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
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button
          sx={{
            backgroundColor: "#54D62C",
            marginTop: 10,
            "&:hover": { backgroundColor: "#229A16" },
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
