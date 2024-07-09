import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import axios from "axios";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({ id: "", email: "" });
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/@me");
        setAuth(true);
        console.log(res.data);
        const { id, email } = res.data;
        console.log(id, email);
        setUser({ id, email });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleLogOut = async () => {
    setAuth(false);
    await axios.post("http://127.0.0.1:5000/logout");
    localStorage.removeItem("session_id");
    window.location.href = "/";
    handleClose();
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MedicAI
          </Typography>
          {auth && (
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
                {user ? (
                  <MenuItem sx={{ color: "black" }} onClick={handleClose}>
                    Logged + {user.email}
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                )}
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
