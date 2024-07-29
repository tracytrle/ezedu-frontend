import * as React from "react";
import { useEffect } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { use } from "i18next";

export default function DatePickerComp({ callback }) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  useEffect(() => {
    if (callback) {
      callback(value);
    }
  }, [value, callback]);

  return (
    <Box
      sx={{
        width: "50%", // Adjust width based on screen size
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label={t("dateOfBirth")}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
