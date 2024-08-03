import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const additionalHealthHistories = [
  { label: "allergies", values: ["Peanut Butter", "Chocolate"] },
  { label: "medications", values: ["MultiVitamin"] },
];

export default function AdditionalHealthRecord() {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", m: 2, mb: 3 }}>
      <Typography variant="h6">Additional Health History</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {additionalHealthHistories.map((history, index) => (
          <React.Fragment key={history.label}>
            <ListItem>
              <ListItemText primary={t(history.label)} />
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
