import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: "black", backgroundColor: "#bdc3c7" }}>
            EN
          </Button>
          <Button sx={{ color: "black", backgroundColor: "#bdc3c7" }}>
            VI
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
}

const whiteTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f5f6fa",
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel("MedicAI")}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
