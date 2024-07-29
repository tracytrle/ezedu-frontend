import * as React from "react";

import { Box, Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import CurrentHealth from "./CurrentHealth";
import AdditionalMedical from "./AdditionalMedical";
import MedicalHistory from "./MedicalHistory";

import { useTranslation } from "react-i18next";

export default function FormPropsTextFields() {
  const { t } = useTranslation();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
      // onSubmit={handleSubmit}
    >
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("currentHealth")} ({t("optional")})
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 1,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey", // Add a border with 1px width and solid black color
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <CurrentHealth />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("medicalHistory")} ({t("optional")})
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 1,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey",
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <MedicalHistory />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("additionalHealthRecord")} ({t("optional")})
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 3,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey",
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <AdditionalMedical />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: "16px",
        }}
      >
        <Button variant="contained">{t("submit")}</Button>
      </Box>
    </Box>
  );
}
