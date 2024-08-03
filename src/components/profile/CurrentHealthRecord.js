import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const healthCheckboxes = [
  { label: "headaches" },
  { label: "cancer" },
  { label: "diabetes" },
  { label: "bloodClots" },
  { label: "arthritisTendonitis" },
  { label: "abnormalSkinCondition" },
  // { label: "highOrLowBloobPressure" },
  // { label: "fibromyalgia" },
  // Uncomment the following lines if you need to include these conditions
  // { label: "neckBackInjury" },
  // { label: "numbness" },
  // { label: "varicoseVeins" },
  // { label: "recentInjury" },
  // { label: "nursingPregnant" },
  // { label: "depression" },
  // { label: "fatigue" },
  // { label: "insomnia" },
];

healthCheckboxes.forEach((checkbox) => {
  checkbox.status = "No";
});

export default function CurrentHealthRecord() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", m: 2 }}>
      <Typography variant="h6">Current Health Record</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {healthCheckboxes.map((checkbox, index) => (
          <React.Fragment key={checkbox.label}>
            <ListItem>
              <ListItemText primary={checkbox.label} />
              <ListItemText align="right" primary={checkbox.status} />
            </ListItem>
            {index < healthCheckboxes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
