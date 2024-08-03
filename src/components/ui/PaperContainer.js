import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CustomizedAvatar from "./CustomizedAvatar";

export default function PaperContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 200,
          height: 200,
        },
      }}
    >
      <Paper elevation={3}>
        <CustomizedAvatar />
      </Paper>
    </Box>
  );
}
