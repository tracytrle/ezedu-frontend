import * as React from "react";
import SelectedListItem from "../ui/SelectedListItem";
import { useEffect, useState } from "react";
import { getUserHealthRecord } from "../../api/api";

const additionHealth = "additionalHealthRecord";

export default function AdditionalHealthRecord() {
  const userId = localStorage.getItem("userId");
  const [additionalRecord, setAdditionalRecor] = useState([]);

  useEffect(() => {
    getUserHealthRecord(userId).then((response) => {
      const data = response.data;
      const keyValuePairsMap = [
        {
          label: "allergies",
          value: data.allergies ? data.allergies : "N/A",
        },
        {
          label: "medications",
          value: data.medications ? data.medications : "N/A",
        },
      ];

      setAdditionalRecor(keyValuePairsMap);
    });
  }, [userId]); // The dependency array ensures this runs when userId changes

  return <SelectedListItem list={additionalRecord} title={additionHealth} />;
}
