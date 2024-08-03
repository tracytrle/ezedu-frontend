import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";

export default function SelectedListItem({ list }) {
  const { t } = useTranslation();
  const entries = Object.entries(list);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        {entries.map(([key, value], index) => (
          <React.Fragment key={key}>
            <ListItem>
              <ListItemText primary={t(key)} />
              <ListItemText primary={t(value)} />
            </ListItem>
            {index < entries.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
