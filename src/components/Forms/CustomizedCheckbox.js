import React from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomizedCheckbox = ({ question, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography variant="body1" sx={{ mr: 2 }}>
        {t(question)}
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "blue",
                },
              }}
              checked={value === "yes"}
              onChange={() => onChange("yes")}
              name="yes"
              color="primary"
            />
          }
          label={t("yes")}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "blue",
                },
              }}
              checked={value === "no"}
              onChange={() => onChange("no")}
              name="no"
              color="primary"
            />
          }
          label={t("no")}
        />
      </FormGroup>
    </Box>
  );
};

export default CustomizedCheckbox;
