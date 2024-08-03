import React, { useState } from "react";
import { Grid, Checkbox, FormControlLabel } from "@mui/material";
import data from "../../data/data.json";
import { useTranslation } from "react-i18next";

const CurrentHealth = () => {
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const checkboxes = data.healthCheckboxes;
  return (
    <Grid container spacing={2}>
      {checkboxes.map((item) => (
        <Grid item xs={4} md={3} key={item.label}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.MuiCheckbox-root.Mui-checked": {
                    color: "blue",
                  },
                }}
                checked={checkedItems[item.label] || false}
                onChange={handleChange}
                name={item.label}
                label={item.label}
              />
            }
            label={t(item.label)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CurrentHealth;
