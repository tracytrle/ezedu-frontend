import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Typography sx={{ mb: 5, fontFamily: "inherit" }} variant="h2">
        {t("notFoundPage")}
      </Typography>
    </Stack>
  );
}

export default NotFoundPage;
