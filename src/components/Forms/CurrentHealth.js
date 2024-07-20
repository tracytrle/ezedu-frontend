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
    { name: "checkbox1", label: "Checkbox 1" },
    { name: "checkbox2", label: "Checkbox 2" },
    { name: "checkbox3", label: "Checkbox 3" },
    { name: "checkbox4", label: "Checkbox 4" },
    { name: "checkbox5", label: "Checkbox 5" },
    { name: "checkbox6", label: "Checkbox 6" },
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
