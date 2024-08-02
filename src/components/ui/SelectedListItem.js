import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const user = {
  "First Name": "John",
  "Middle Name": "A.",
  "Last Name": "Doe",
  Gender: "Male",
  "Date of Birth": "1990-05-15",
  Phone: "1234567890",
  Email: "john.doe@example.com",
  City: "New York",
  Country: "USA",
};

export default function SelectedListItem() {
  const entries = Object.entries(user);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        {entries.map(([key, value], index) => (
          <React.Fragment key={key}>
            <ListItem>
              <ListItemText primary={key} />
              <ListItemText primary={value} />
            </ListItem>
            {index < entries.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
