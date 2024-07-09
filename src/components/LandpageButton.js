import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function LandpageButton() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate(`/login`);
  };

  const handleRegister = () => {
    navigate(`/register`);
  };
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => handleSignIn()}
        sx={{ backgroundColor: "#54D62C" }}
        variant="contained"
      >
        Sign In
      </Button>
      <Button
        sx={{ backgroundColor: "#54D62C" }}
        variant="contained"
        onClick={() => handleRegister()}
      >
        Register
      </Button>
    </Stack>
  );
}
