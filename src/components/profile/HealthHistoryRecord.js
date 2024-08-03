import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const healthHistories = [
  { label: "heartQuesion", status: "No" },
  { label: "surgeriesQuestion", status: "No" },
  { label: "chronicIllnessQuestion", status: "No" },
  { label: "bloodPressureQuestion", status: "No" },
];

export default function HealthHistoryRecord() {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", m: 2, mb: 2 }}>
      <Typography variant="h6">Health History</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {healthHistories.map((checkbox, index) => (
          <React.Fragment key={checkbox.label}>
            <ListItem>
              <ListItemText primary={t(checkbox.label)} />
              <ListItemText align="right" primary={t(checkbox.status)} />
            </ListItem>
            {index < healthHistories.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
