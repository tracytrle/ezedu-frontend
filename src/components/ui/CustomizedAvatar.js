import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function CustomizedAvatar() {
  return (
    <Avatar
      alt="Remy Sharp"
      src="/avatar.png"
      sx={{
        width: 180,
        height: 180,
        mt: 5,
      }}
    />
  );
}
