import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CurrentHealthRecord from "./CurrentHealthRecord";
import { getUserHealthRecord } from "../../api/api";

function CurrentHealthRecords() {
  const userId = localStorage.getItem("userId");
  const [healthRecord, setHealthRecord] = useState([]);
  const [record1, setRecord1] = useState([]);
  const [record2, setRecord2] = useState([]);

  useEffect(() => {
    getUserHealthRecord(userId).then((response) => {
      // how to convert repsonse.data to a list of objects?
      const data = response.data;
      const keyValuePairsMap = [
        { label: "isHeadache", value: data.isHeadache ? "Yes" : "No" },
        { label: "isCancer", value: data.isCancer ? "Yes" : "No" },
        { label: "isDiabetes", value: data.isDiabetes ? "Yes" : "No" },
        { label: "isBloodClots", value: data.isBloodClots ? "Yes" : "No" },
        {
          label: "isArthritis",
          value: data.isArthritis ? "Yes" : "No",
        },
        {
          label: "isAbnormalSkinConditions",
          value: data.isAbnormalSkinConditions ? "Yes" : "No",
        },
        {
          label: "highOrLowBloodPressure",
          value: data.isHighOrLowBloodPressure ? "Yes" : "No",
        },
        { label: "isFibromyalgia", value: data.isFibromyalgia ? "Yes" : "No" },
        {
          label: "isNeckOrBackPain",
          value: data.isNeckOrBackPain ? "Yes" : "No",
        },
        { label: "isNumbness", value: data.isNumbness ? "Yes" : "No" },
        {
          label: "isVaricoseVeins",
          value: data.isVaricoseVeins ? "Yes" : "No",
        },
        { label: "isRecentInjury", value: data.isRecentInjury ? "Yes" : "No" },
        {
          label: "isNursingOrPregnant",
          value: data.isNursingOrPregnant ? "Yes" : "No",
        },
        { label: "isDepression", value: data.isDepression ? "Yes" : "No" },
        { label: "isFatigue", value: data.isFatigue ? "Yes" : "No" },
        { label: "isInsomnia", value: data.isInsomnia ? "Yes" : "No" },
      ];
      setHealthRecord(keyValuePairsMap);
    });
  }, [userId]);

  useEffect(() => {
    if (healthRecord.length > 0) {
      setRecord1(healthRecord.slice(0, 8));
      setRecord2(healthRecord.slice(8, 16));
    }
  }, [healthRecord]);

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
          <CurrentHealthRecord list={record1} title={"currentHealth"} />
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
          <CurrentHealthRecord list={record2} title={"currentHealth"} />
        </Box>
      </Box>
    </>
  );
}

export default CurrentHealthRecords;
