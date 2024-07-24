import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePickerValue from "./DatePicker.Value";
import DropoutMenu from "./DropoutMenu";
import Typography from "@mui/material/Typography";
import CurrentHealth from "./CurrentHealth";
import AdditionalMedical from "./AdditionalMedical";
import MedicalHistory from "./MedicalHistory";
import PhoneInput from "./PhoneInput";
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
    >
      <Box sx={{ ml: 1, mb: 1 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          {t("userInformation")} ({t("required")})
        </Typography>
      </Box>
      <div>
        <TextField
          required
          id="outlined-required"
          label={t("firstName")}
          defaultValue="Alice"
        />
        <TextField
          id="outlined-input"
          label={t("middleName")}
          defaultValue="T"
        />
        <TextField
          required
          id="outlined-required"
          label={t("lastName")}
          defaultValue="Wong"
        />
      </div>
      <Box
        sx={{
          witdh: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <DatePickerValue />
        <TextField
          sx={{
            width: "80%",
          }}
          required
          id="outlined-required"
          label={t("email")}
        />
        <Box
          sx={{
            witdh: "100%",
            display: "flex",
            "& .MuiTextField-root": { m: 1, width: "28ch" },
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <DropoutMenu />
          <PhoneInput />
        </Box>
      </Box>

      <div>
        <TextField required id="outlined-required" label={t("address")} />
        <TextField id="outlined-input" label={t("city")} />
        <TextField
          required
          id="outlined-required"
          label={t("country")}
          defaultValue="Vietnam"
        />
      </div>
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
    </Box>
  );
}
