import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ClientInfo from "../../components/forms/ClientInfo";

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
          width: "50%",
          height: "90%",
          overflowY: "auto",
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
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography variant="h4">Registration Form</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column  ",
            ml: 3,
          }}
        >
          <ClientInfo />
        </Box>
      </Box>
    </Stack>
  );
}

export default InfoForm;