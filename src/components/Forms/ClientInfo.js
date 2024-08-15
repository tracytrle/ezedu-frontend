import * as React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import CurrentHealth from "./CurrentHealth";
import AdditionalMedical from "./AdditionalMedical";
import MedicalHistory from "./MedicalHistory";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext, useState } from "react";

export default function FormPropsTextFields() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { authState } = useContext(AuthContext);
  const [currentHealthData, setCurrentHealthData] = useState({});
  const [medicalHistoryData, setMedicalHistoryData] = useState({});
  const [additionalMedicalData, setAdditionalMedicalData] = useState({});
  const [userRecord, setUserRecord] = useState({});
  const userId = localStorage.getItem("userId");

  if (!authState.token) {
    window.location.href = "/";
    return null;
  }

  const handleSubmit = () => {
    const userDataRecord = {
      userId: userId,
      ...currentHealthData,
      ...medicalHistoryData,
      ...additionalMedicalData,
    };

    setUserRecord(userDataRecord);
    console.log("userDataRecord:" + JSON.stringify(userDataRecord, null, 2));
  };

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
          {t("currentHealth")}
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
        <CurrentHealth setData={setCurrentHealthData} />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("medicalHistory")}
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 1,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey",
          borderRadius: "4px",
          padding: "16px",
        }}
      >
        <MedicalHistory setData={setMedicalHistoryData} />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("additionalHealthRecord")}
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 3,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey",
          borderRadius: "4px",
          padding: "16px",
        }}
      >
        <AdditionalMedical setData={setAdditionalMedicalData} />
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
        <Button
          sx={{
            backgroundColor: theme.palette.primary.dark,
            "&:hover": { backgroundColor: "#A3E4EA" },
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          {t("submit")}
        </Button>
      </Box>
    </Box>
  );
}
