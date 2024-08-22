import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { addConversation } from "../../api/api";
import "../../index.css";

export default function Display({ conversationId, userId }) {
  const messages = useSelector((state) => state.messages);
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === "user") {
        const data = {
          conversationId: conversationId,
          sender: "user",
          message: lastMessage.text,
        };
        addConversation(userId, data);
      }
    }
  }, [messages, conversationId, userId]);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "600px", // Fixed height for the container
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      <Stack>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              backgroundColor: msg.sender === "user" ? "#d1e7dd" : "#f8d7da",
              marginLeft: msg.sender === "user" ? "auto" : "5",
              marginRight: msg.sender === "user" ? "0" : "auto",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "60%",
              marginBottom: "10px",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </Stack>
    </Box>
  );
}
