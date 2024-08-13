import React from "react";
import SelectedListItem from "../ui/SelectedListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserInfo() {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        toast.error("No token found. Please log in."); // Show toast notification
        return;
      }
      try {
        const response = await axios.get(`${API_URL}/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
            "Content-Type": "application/json",
          },
        });

        const userInfor = [
          { label: "firstName", value: response.data.firstName },
          { label: "middleName", value: response.data.middleName },
          { label: "lastName", value: response.data.lastName },
          { label: "gender", value: response.data.gender },
          {
            label: "dateOfBirth",
            value: new Date(response.data.dateOfBirth).toLocaleDateString(),
          },
          { label: "phone", value: response.data.phone },
          { label: "email", value: response.data.email },
          { label: "city", value: response.data.city },
          { label: "country", value: response.data.country },
        ];

        setUserData(userInfor);
      } catch (error) {
        toast.error(
          "Error fetching user data.",
          error.response || error.message
        );
      }
    };
    fetchUserData();
  }, [token]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SelectedListItem list={userData} />
      <ToastContainer />
    </>
  );
}
