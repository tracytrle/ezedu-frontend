import React from "react";
import SelectedListItem from "../ui/SelectedListItem";

const user = {
  firstName: "John",
  middleName: "A.",
  lastName: "Doe",
  gender: "Male",
  dateOfBirth: "1990-05-15",
  phone: "1234567890",
  email: "john.doe@example.com",
  city: "New York",
  country: "USA",
};

export default function UserInfo() {
  return <SelectedListItem list={user} />;
}
