import React, { useState } from "react";
import Box from "@mui/material/Box";

import CustomizedCheckbox from "./CustomizedCheckbox";

const questions = [
  "Do you have a history of heart/circulation problems?",
  "Have you had any surgeries?",
  "Do you have a chronic illness?",
  "Do you have a high/low blood pressure?",
];

export default function MedicalHistory() {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  return (
    <Box>
      <Box
        sx={{
          mb: 1,
          mr: 10,
        }}
      >
        {questions.map((question) => (
          <CustomizedCheckbox
            key={question}
            question={question}
            value={answers[question]}
            onChange={(answer) => handleAnswerChange(question, answer)}
          />
        ))}
      </Box>
    </Box>
  );
}
