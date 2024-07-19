import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ClientInfo from "../components/Forms/ClientInfo";

function InfoForm() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundImage: `url("./mainBG.jpg")`,
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Client Form</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ClientInfo />
        </Box>
      </Box>
    </Stack>
  );
}

export default InfoForm;
