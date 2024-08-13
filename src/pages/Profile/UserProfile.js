import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import CustomizedAvatar from "../../components/ui/CustomizedAvatar";
import HealthHistoryRecord from "../../components/profile/HealthHistoryRecord";
import AdditionalHealthRecord from "../../components/profile/AdditionalHealthRecord";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import UserInfo from "../../components/profile/UserInfo";
import CurrentHealthRecords from "../../components/profile/CurrentHealthRecords";

function UserProfile() {
  const { t } = useTranslation();
  const theme = useTheme();
  const handleUpdateProfile = () => {
    window.location.href = "/information";
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url("./mainBG.jpg")`,
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "90%",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "100%" },
        }}
      >
        <Grid container spacing={1} sx={{ width: "100%", height: "100%" }}>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                height: "450px",
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <CustomizedAvatar />
            </Box>
          </Grid>

          <Grid item xs={8}>
            <CurrentHealthRecords />
          </Grid>

          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                height: "500px",
                bgcolor: "white",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "space-between",
                padding: "20px",
                position: "relative",
              }}
            >
              <UserInfo />
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "320px",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "120%",
                    height: "320px",
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <HealthHistoryRecord />
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "320px",
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <AdditionalHealthRecord />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "150px",
                  bgcolor: "white",
                  flexDirection: "row",
                  gap: "10px",
                  padding: "50px",
                }}
              >
                <Button
                  sx={{
                    width: "20%",
                    heigh: "5%",
                    color: "black",
                    bgcolor: theme.palette.primary.dark,

                    "&:hover": { backgroundColor: "#A3E4EA" },
                  }}
                  onClick={handleUpdateProfile}
                >
                  {t("updateProfile")}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default UserProfile;
