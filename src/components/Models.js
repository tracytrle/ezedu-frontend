import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels() {
  const [model, setModel] = React.useState(1);

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={model}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={1}>GPT4.0</MenuItem>
          <MenuItem value={2}>GPT3.0</MenuItem>
          <MenuItem value={3}>Medic</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
