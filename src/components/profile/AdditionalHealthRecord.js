import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const additionalHealthHistories = [
  { label: "allegiesQuestion", values: ["Peanut Butter", "Chocolate"] },
  { label: "medicineQuestion", values: ["MultiVitamin"] },
];

export default function AdditionalHealthRecord() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", m: 2, mb: 3 }}>
      <Typography variant="h6">Additional Health History</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {additionalHealthHistories.map((history, index) => (
          <React.Fragment key={history.label}>
            <ListItem>
              <ListItemText primary={history.label} />
              <ListItemText
                primary={history.values.join(", ")}
                style={{ textAlign: "right" }}
              />
            </ListItem>
            {index < additionalHealthHistories.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
