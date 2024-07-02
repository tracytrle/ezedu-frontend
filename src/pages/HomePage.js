import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Footer from "../layouts/Footer.js";
import Header from "../layouts/Header.js";

import MainContent from "../components/MainContent.js";

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
