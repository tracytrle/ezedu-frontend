import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

const genders = ["Male", "Female", "Not Specific"];

export default function DropoutMenu() {
  const [gender, setGender] = React.useState("Male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 90 }}>
      <InputLabel>Gender</InputLabel>

      <Select
        value={gender}
        label="Gender"
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {genders.map((gender, index) => (
          <MenuItem value={index}>{gender}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
