import React, { useState } from "react";
import { Grid, Checkbox, FormControlLabel } from "@mui/material";

const CurrentHealth = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const checkboxes = [
    { name: "headaches", label: "Headaches " },
    { name: "cancer", label: "Cancer" },
    { name: "diabetes", label: "Diabetes" },
    { name: "blood clots", label: "blood clots" },
    { name: "arthrits/tendonitis", label: "Arthrits/Tendonitis" },
    { name: "bnormal skin condition", label: "Abnormal skin condition" },
    { name: "high/low blood pressure", label: "High/Low blood pressure" },
    { name: "fibromyalgia", label: "Fibromyalgia" },
    { name: "neck/back injure", label: "Neck/Back injure" },
    { name: "numbness", label: "Numbness" },
    { name: "varicose veins", label: "Varicose veins" },
    { name: "recent injury", label: "Recent injury" },
    { name: "nursing/pregnant", label: "Nursing/Pregnant" },
    { name: "depression", label: "Depression" },
    { name: "fatigue", label: "Fatigue" },
    { name: "insomnia", label: "Insomnia" },
  ];

  return (
    <Grid container spacing={2}>
      {checkboxes.map((item) => (
        <Grid item xs={4} md={3} key={item.name}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "blue",
                  },
                }}
                checked={checkedItems[item.name] || false}
                onChange={handleChange}
                name={item.name}
              />
            }
            label={item.label}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CurrentHealth;
