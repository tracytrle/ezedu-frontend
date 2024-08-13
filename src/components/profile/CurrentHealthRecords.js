import React from "react";
import Box from "@mui/material/Box";
import CurrentHealthRecord from "./CurrentHealthRecord";

const healthCheckboxes = [
  { label: "headaches", value: "No" },
  { label: "cancer", value: "No" },
  { label: "diabetes", value: "No" },
  { label: "bloodClots", value: "No" },
  { label: "arthritisTendonitis", value: "No" },
  { label: "abnormalSkinCondition", value: "No" },
  { label: "highOrLowBloobPressure", value: "No" },
  { label: "fibromyalgia", value: "No" },
  { label: "neckBackInjury", value: "No" },
  { label: "numbness", value: "No" },
  { label: "varicoseVeins", value: "No" },
  { label: "recentInjury", value: "No" },
  { label: "nursingPregnant", value: "No" },
  { label: "depression", value: "No" },
  { label: "fatigue", value: "No" },
  { label: "insomnia", value: "No" },
];

const sublist1 = healthCheckboxes.slice(0, 8);
const sublist2 = healthCheckboxes.slice(8, 16);

function CurrentHealthRecords() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "450px",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "450px",
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CurrentHealthRecord list={sublist1} title={"currentHealth"} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "450px",
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CurrentHealthRecord list={sublist2} title={"currentHealth"} />
        </Box>
      </Box>
    </>
  );
}

export default CurrentHealthRecords;
