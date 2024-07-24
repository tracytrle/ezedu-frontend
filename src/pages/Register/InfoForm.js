import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ClientInfo from "../../components/forms/ClientInfo";
import { useTranslation } from "react-i18next";

function InfoForm() {
  const { t } = useTranslation();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url("./mainBG.jpg")`,
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "90%",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">{t("registrationForm")}</Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            height: "90%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            ml: 3,
          }}
        >
          <ClientInfo />
        </Box>
      </Box>
    </Stack>
  );
}

export default InfoForm;
