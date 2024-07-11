import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function LandpageButton() {
  const theme = useTheme();
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
        sx={{ backgroundColor: theme.palette.primary.dark }}
        variant="contained"
      >
        Sign In
      </Button>
      <Button
        sx={{ backgroundColor: theme.palette.primary.dark }}
        variant="contained"
        onClick={() => handleRegister()}
      >
        Register
      </Button>
    </Stack>
  );
}
