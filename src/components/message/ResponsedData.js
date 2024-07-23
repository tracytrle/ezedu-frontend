import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import getResponse from "./getResponse";

function ResponsedData() {
  const [messages, setMessages] = useState([]);
  const searchTerm = "He is cute";

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await getResponse(searchTerm);
        console.log("response: " + response);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: searchTerm, sender: "user" },
          { text: response, sender: "bot" },
        ]);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    };

    fetchResponse();
  }, [searchTerm]);

  useEffect(() => {
    console.log("messages:", messages);
  }, [messages]);

  return (
    <Stack>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
    </Stack>
  );
}

export default ResponsedData;
