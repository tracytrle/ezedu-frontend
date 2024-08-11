import React from "react";
import SelectedListItem from "../ui/SelectedListItem";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserInfo() {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }
      try {
        const response = await axios.get("http://localhost:5005/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
            "Content-Type": "application/json",
          },
        });
        const userInfor = {
          firstName: response.data.firstName,
          middleName: response.data.middleName,
          lastName: response.data.lastName,
          gender: response.data.gender,
          dateOfBirth: new Date(response.data.dateOfBirth).toLocaleDateString(),
          phone: response.data.phone,
          email: response.data.email,
          city: response.data.city,
          country: response.data.country,
        };

        setUserData(userInfor);
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response || error.message
        );
      }
    };
    fetchUserData();
  }, [token]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return <SelectedListItem list={userData} />;
}
