import React, { useState } from "react";
import Box from "@mui/material/Box";

import CustomizedCheckbox from "./CustomizedCheckbox";
import { Typography } from "@mui/material";

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
            <Typography variant="h6">If yes: </Typography>
            <hr />
          </div>
        ))}
      </Box>
    </Box>
  );
}
