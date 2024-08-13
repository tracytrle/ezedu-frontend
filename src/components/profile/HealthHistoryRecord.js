import * as React from "react";
import SelectedListItem from "../ui/SelectedListItem";

const healthHistories = [
  { label: "heartQuesion", value: "No" },
  { label: "surgeriesQuestion", value: "No" },
  { label: "chronicIllnessQuestion", value: "No" },
  { label: "bloodPressureQuestion", value: "No" },
];

const healthHistoryTitle = "medicalHistory";

export default function HealthHistoryRecord() {
  return <SelectedListItem list={healthHistories} title={healthHistoryTitle} />;
}
