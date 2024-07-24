import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import data from "../../data/data.json";

import CustomizedCheckbox from "./CustomizedCheckbox";

const questions = data.questions;

export default function MedicalHistory() {
  const { t } = useTranslation();
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
            question={t(question)}
            value={answers[question]}
            onChange={(answer) => handleAnswerChange(question, answer)}
          />
        ))}
      </Box>
    </Box>
  );
}
