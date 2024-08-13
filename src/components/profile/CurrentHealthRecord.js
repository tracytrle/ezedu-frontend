import * as React from "react";

import SelectedListItem from "../ui/SelectedListItem";

export default function CurrentHealthRecord({ list, title }) {
  return <SelectedListItem list={list} title={title} />;
}
