import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

function NotFoundPage() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Typography sx={{ mb: 5, fontFamily: "inherit" }} variant="h2">
        404 NOT FOUND
      </Typography>
    </Stack>
  );
}

export default NotFoundPage;
