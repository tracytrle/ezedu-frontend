import React from "react";
import { Link, Typography, Box } from "@mui/material";

function MainFooter() {
  return (
    <Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          mt: "5rem",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          p={1}
          marginBottom={0}
        >
          {"Copyright © "}
          <Link color="inherit">MedicAI</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}

export default MainFooter;
