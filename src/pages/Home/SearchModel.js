import React from "react";
import { TextField } from "@mui/material";

function SearchModel() {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      sx={{ ml: 2, mr: 2, width: "90%" }}
    />
  );
}

export default SearchModel;
