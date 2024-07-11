import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch } from "react-redux";
import { addMessage, fetchBotResponse } from "./messagesSlice";
import { AuthContext } from "../AuthComponents/AuthContext";

export default function TextFieldBase() {
  const [tempInput, setTempInput] = useState(""); // Temporary input state
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTempInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission

    if (tempInput) {
      const encodedInput = encodeURIComponent(tempInput);
      setTempInput(encodedInput);
      dispatch(addMessage({ text: tempInput, sender: "user" }));
      setTempInput(""); // Clear the input field after dispatching

      // Introduce a delay before dispatching the bot response
      dispatch(fetchBotResponse(encodedInput));
    }
  };

  return (
    <Paper
      data-testid="text-field-base-component"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        height: "75px",
        bgcolor: "lightyellow",
      }}
      onSubmit={handleClick} // Ensure form submission is handled by handleClick
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Message"
        inputProps={{ "aria-label": "Message" }}
        value={tempInput}
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="third"
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={handleClick}
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
