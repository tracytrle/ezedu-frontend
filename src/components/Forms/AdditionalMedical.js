import React, { useState } from "react";
import Box from "@mui/material/Box";
import CustomizedCheckbox from "./CustomizedCheckbox";
import { TextField } from "@mui/material";
import data from "../../data/data.json";
import { useTranslation } from "react-i18next";

const questions = data.additionalQuestions;

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
          mr: 10,
        }}
      >
        {questions.map((question) => (
          <div>
            <CustomizedCheckbox
              key={question}
              question={t(question)}
              value={answers[question]}
              onChange={(answer) => handleAnswerChange(question, answer)}
            />
            <TextField
              id="outlined-basic"
              label={t("specify")}
              variant="outlined"
              fullWidth
            />
          </div>
        ))}
      </Box>
    </Box>
  );
}
