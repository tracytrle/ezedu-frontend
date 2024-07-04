import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LandpageButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button sx={{ backgroundColor: "#54D62C" }} variant="contained">
        Sign In
      </Button>
      <Button sx={{ backgroundColor: "#54D62C" }} variant="contained">
        Register
      </Button>
    </Stack>
  );
}
