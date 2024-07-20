import React from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
} from "@mui/material";

const CustomizedCheckbox = ({ question, value, onChange }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography variant="body1" sx={{ mr: 2 }}>
        {question}
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
          label="Yes"
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
          label="No"
        />
      </FormGroup>
    </Box>
  );
};

export default CustomizedCheckbox;
