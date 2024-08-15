import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

import MainContent from "./MainContent";

function Homepage() {
  return (
    <Stack data-testid="home-component">
      <Header />

      <Outlet />

      <MainContent />

      <Footer />
    </Stack>
  );
}

export default Homepage;
