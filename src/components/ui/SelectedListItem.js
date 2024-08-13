import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export default function SelectedListItem({ list, title }) {
  const { t } = useTranslation();
  const newTitle = t(title);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", m: 2, mb: 3 }}>
      {title && <Typography variant="h6">{newTitle}</Typography>}
      <List component="nav" aria-label="main mailbox folders">
        {list.map((item, index) => (
          <React.Fragment key={item.lable}>
            <ListItem>
              <ListItemText primary={t(item.label)} />
              <ListItemText align="right" primary={t(item.value)} />
            </ListItem>
            {index < list.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
