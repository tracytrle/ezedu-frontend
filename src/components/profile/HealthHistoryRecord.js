import * as React from "react";
import SelectedListItem from "../ui/SelectedListItem";
import { useEffect, useState } from "react";
import { getUserHealthRecord } from "../../api/api";

const healthHistoryTitle = "medicalHistory";

export default function HealthHistoryRecord() {
  const userId = localStorage.getItem("userId");
  const [currentHealth, setCurrentHealth] = useState([]);

  useEffect(() => {
    getUserHealthRecord(userId).then((response) => {
      // Convert response.data to a list of objects
      const data = response.data;
      const keyValuePairsMap = [
        {
          label: "isHavingHeartDisease",
          value: data.isHavingHeartDisease ? "Yes" : "No",
        },
        {
          label: "isHavingSurgery",
          value: data.isHavingSurgery ? "Yes" : "No",
        },
        {
          label: "isHavingChronisIllness",
          value: data.isHavingChronisIllness ? "Yes" : "No",
        },
        {
          label: "isHavingHighOrLowBloodPressure",
          value: data.isHavingHighOrLowBloodPressure ? "Yes" : "No",
        },
      ];

      setCurrentHealth(keyValuePairsMap);
    });
  }, [userId]); // The dependency array ensures this runs when userId changes

  return <SelectedListItem list={currentHealth} title={healthHistoryTitle} />;
}
