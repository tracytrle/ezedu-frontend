import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Logo from "./Logo";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        startIcon={<Logo src={`/chatIcon.png`} alt="login" size={40} />}
      ></Button>
    </Stack>
  );
}
