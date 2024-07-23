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
import { useTranslation } from "react-i18next";

function AppBarLabel({ label, changeLanguage }) {
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
          <Button
            sx={{ color: "black", backgroundColor: "#bdc3c7" }}
            onClick={() => changeLanguage("vi")}
          >
            VI
          </Button>
          <Button
            sx={{ color: "black", backgroundColor: "#bdc3c7" }}
            onClick={() => changeLanguage("en")}
          >
            EN
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

export default function DefaultAppBar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <AppBarLabel label="MedicAI" changeLanguage={changeLanguage} />
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
