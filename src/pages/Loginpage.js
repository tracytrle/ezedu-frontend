import React from "react";
import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Loginpage() {
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
      >
        <Typography sx={{ mb: 5, fontFamily: "serif" }} variant="h4">
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
        </Box>
        <Button
          sx={{
            backgroundColor: "#54D62C",
            marginTop: 10,
            "&:hover": { backgroundColor: "#229A16" },
          }}
          variant="contained"
        >
          Sign In
        </Button>
      </Box>
    </Stack>
  );
}

export default Loginpage;
