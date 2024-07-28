import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DropoutMenu(menu) {
  const [gender, setGender] = React.useState("Male");
  const { t } = useTranslation();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 90 }}>
      <InputLabel>{t("gender")}</InputLabel>

      <Select
        value={gender}
        label={t("gender")}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {menu.map((item, index) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
