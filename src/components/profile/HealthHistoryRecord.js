import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const healthHistories = [
  { label: "heartQuesion", status: "No" },
  { label: "surgeriesQuestion", status: "No" },
  { label: "chronicIllnessQuestion", status: "No" },
  { label: "bloodPressureQuestion", status: "No" },
];

export default function healthHistoryRecord() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", m: 2, mb: 2 }}>
      <Typography variant="h6">Health History</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {healthHistories.map((checkbox, index) => (
          <React.Fragment key={checkbox.label}>
            <ListItem>
              <ListItemText primary={checkbox.label} />
              <ListItemText align="right" primary={checkbox.status} />
            </ListItem>
            {index < healthHistories.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
