import React from "react";
import { Stack, Box } from "@mui/material";
import LandpageButton from "../components/LandpageButton";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

function LandingPage() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        backgroundImage: `url("./mainBG.jpg")`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 5 }} variant="h4">
          Welcome to MedicAI
        </Typography>
        <LandpageButton />
      </Box>
    </Stack>
  );
}

export default LandingPage;
