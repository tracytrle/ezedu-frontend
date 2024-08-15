import React, { useState } from "react";
import { Grid, Checkbox, FormControlLabel } from "@mui/material";
import data from "../../data/data.json";
import { useTranslation } from "react-i18next";

const CurrentHealth = ({ setData }) => {
  const { t } = useTranslation();
  const checkboxes = data.healthCheckboxes;
  const initialCheckedItems = checkboxes.reduce((acc, item) => {
    acc[item.label] = false;
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const handleChange = (event) => {
    const updatedCheckedItems = {
      ...checkedItems,
      [event.target.name]: event.target.checked,
    };
    setCheckedItems(updatedCheckedItems);
    setData(updatedCheckedItems);
  };

  const handleNotApplied = () => {
    setCheckedItems(initialCheckedItems);
    setData(initialCheckedItems);
  };

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
                checked={checkedItems[item.label]}
                onChange={handleChange}
                name={item.label}
                label={item.label}
              />
            }
            label={t(item.label)}
          />
        </Grid>
      ))}
      <Grid item xs={4} md={3}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.MuiCheckbox-root.Mui-checked": {
                  color: "blue",
                },
              }}
              checked={checkedItems["Not Applied"]}
              onChange={handleNotApplied}
              name="Not Applied"
              label="Not Applied"
            />
          }
          label={t("notHavingAnyCondition")}
        />
      </Grid>
    </Grid>
  );
};

export default CurrentHealth;
