import React from "react";
import { Stack, Grid, Box } from "@mui/material";
import TextFieldBase from "./TextFieldBase";
import SearchModel from "./SearchModel";
import Display from "./Display";
import Models from "./Models";
import CustomizedButton from "./CustomizedButton";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  displayContainer: {
    flex: 1,
  },
  textFieldContainer: {
    position: "sticky",
    bottom: 0,
    backgroundColor: "lightyellow",
    zIndex: 1, // Ensure it stays on top
    p: 1,
  },
};

function MainContent() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: "lightgray",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Grid container direction="column" spacing={3} sx={{ width: "100%" }}>
            <Grid item sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Models />
                <CustomizedButton />
              </Box>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <SearchModel />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            bgcolor: "lightblue",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "100%", height: "100%" }}>
            <Grid container direction="column" sx={{ height: "100%", mt: 2 }}>
              <Grid
                style={styles.displayContainer}
                item
                sx={{
                  bgcolor: "lightblue",
                  mr: 4,
                  ml: 2,
                  mb: 2,
                }}
              >
                <Display />
              </Grid>
              <Grid
                style={styles.textFieldContainer}
                item
                sx={{
                  bgcolor: "lightblue",
                  height: "0%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  mr: 2,
                }}
              >
                <TextFieldBase />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MainContent;
