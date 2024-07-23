import React from "react";
import { Stack, Box } from "@mui/material";
import LandpageButton from "./LandpageButton";
import Typography from "@mui/material/Typography";
import DefaultAppBar from "../../layouts/DefaultAppBar";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "space-around",
        flexDirection: "column",
        backgroundImage: `url("./mainBG.jpg")`,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <DefaultAppBar label="MedicAI" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: 30,
        }}
      >
        <Typography sx={{ mb: 5 }} variant="h4">
          {t("welcome")}
        </Typography>
        <LandpageButton />
      </Box>
    </Stack>
  );
}

export default LandingPage;
