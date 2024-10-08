import * as React from "react";
import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AuthContext } from "../context/authContext/AuthContext";
import { useTranslation } from "react-i18next";

export default function MenuAppBar() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const { logout, authState } = useContext(AuthContext);
  if (!authState.token) {
    window.location.href = "/";
    return null;
  }
  const handleLogOut = async () => {
    logout();
    window.location.href = "/";
    handleClose();
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    window.location.href = "/profile";
    handleClose();
  };
  const navigateToHomepage = () => {
    window.location.href = "/homepage";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={navigateToHomepage} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MedicAI
          </Typography>
          {authState.token && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>{t("profile")}</MenuItem>
                <MenuItem onClick={handleClose}>{t("myAccount")}</MenuItem>
                <MenuItem onClick={handleLogOut}>{t("logout")}</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
