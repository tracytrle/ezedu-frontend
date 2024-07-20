import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePickerValue from "./DatePicker.Value";
import DropoutMenu from "./DropoutMenu";
import Typography from "@mui/material/Typography";
import CurrentHealth from "./CurrentHealth";
// import CustomizedCheckbox from "./CustomizedCheckbox";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ ml: 1, mb: 1 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          User Information
        </Typography>
      </Box>
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue="Alice"
        />
        <TextField id="outlined-input" label="Middle Name" defaultValue="T" />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue="Wong"
        />
      </div>
      <Box
        sx={{
          witdh: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 2, // Add spacing between the elements
        }}
      >
        <DatePickerValue />
        <DropoutMenu />
        <TextField
          required
          id="outlined-required"
          label="Email"
          // defaultValue="abc@gmail.com"
        />
      </Box>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Address"
          // defaultValue="Alice"
        />
        <TextField id="outlined-input" label="City" />
        <TextField
          required
          id="outlined-required"
          label="Country"
          defaultValue="Vietnam"
        />
      </div>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          Current Health
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 3,
          mb: 1,
          mt: 2,
          mr: 10,
          border: "0.5px solid grey", // Add a border with 1px width and solid black color
          borderRadius: "4px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add some padding inside the box
        }}
      >
        <CurrentHealth />
      </Box>
      <Box sx={{ ml: 1, mb: 1, mt: 2 }}>
        <Typography variant="h5" fontFamily={"-moz-initial"}>
          Medical History
        </Typography>
        <Box
          sx={{
            ml: 3,
            mb: 1,
            mt: 2,
            mr: 10,

            borderRadius: "4px", // Optional: Add rounded corners
            padding: "16px", // Optional: Add some padding inside the box
          }}
        >
          {/* <CustomizedCheckbox />
          <CustomizedCheckbox /> */}
        </Box>
      </Box>
    </Box>
  );
}
