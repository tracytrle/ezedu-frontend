import React, { useState } from "react";
import Box from "@mui/material/Box";
import CustomizedCheckbox from "./CustomizedCheckbox";
import { TextField } from "@mui/material";

const questions = [
  "Have you had any allegies?",
  "Have you taken any medicine?",
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
          mr: 10,
        }}
      >
        {questions.map((question) => (
          <div>
            <CustomizedCheckbox
              key={question}
              question={question}
              value={answers[question]}
              onChange={(answer) => handleAnswerChange(question, answer)}
            />
            <TextField
              id="outlined-basic"
              label="If yes, please specify:"
              variant="outlined"
              fullWidth
            />
          </div>
        ))}
      </Box>
    </Box>
  );
}
