import React from "react";
import Box from "@mui/material/Box";
import CurrentHealthRecord from "./CurrentHealthRecord";

const healthCheckboxes = [
  { label: "headaches", status: "No" },
  { label: "cancer", status: "No" },
  { label: "diabetes", status: "No" },
  { label: "bloodClots", status: "No" },
  { label: "arthritisTendonitis", status: "No" },
  { label: "abnormalSkinCondition", status: "No" },
  { label: "highOrLowBloobPressure", status: "No" },
  { label: "fibromyalgia", status: "No" },
  { label: "neckBackInjury", status: "No" },
  { label: "numbness", status: "No" },
  { label: "varicoseVeins", status: "No" },
  { label: "recentInjury", status: "No" },
  { label: "nursingPregnant", status: "No" },
  { label: "depression", status: "No" },
  { label: "fatigue", status: "No" },
  { label: "insomnia", status: "No" },
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
          <CurrentHealthRecord list={sublist1} />
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
          <CurrentHealthRecord list={sublist2} />
        </Box>
      </Box>
    </>
  );
}

export default CurrentHealthRecords;
