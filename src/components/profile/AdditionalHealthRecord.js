import * as React from "react";

import SelectedListItem from "../ui/SelectedListItem";

const additionalHealthHistories = [
  { label: "allergies", value: "N/A" },
  { label: "medications", value: "N/A" },
];
const additionHealth = "additionalHealthRecord";

export default function AdditionalHealthRecord() {
  return (
    <SelectedListItem list={additionalHealthHistories} title={additionHealth} />
  );
}
