// BoxesComponent.jsx
import React from "react";
import Box from "@mui/material/Box";

const BoxesComponent = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      p={2}
      style={{ backgroundColor: "#f5f5f5", height: "100vh" }}
    >
      <Box
        width={100}
        height={100}
        bgcolor="primary.main"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Box 1
      </Box>
      <Box
        width={150}
        height={150}
        bgcolor="secondary.main"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Box 2
      </Box>
      <Box
        width={200}
        height={200}
        bgcolor="success.main"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Box 3
      </Box>
      <Box
        width={250}
        height={250}
        bgcolor="error.main"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Box 4
      </Box>
    </Box>
  );
};

export default BoxesComponent;
