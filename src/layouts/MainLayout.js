import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <Footer />
    </Stack>
  );
}

export default MainLayout;
