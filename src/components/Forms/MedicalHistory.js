import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import data from "../../data/data.json";
import CustomizedCheckbox from "./CustomizedCheckbox";

export default function MedicalHistory({ setData }) {
  const questions = data.questions;
  const { t } = useTranslation();
  const [returnedData, setReturnedData] = useState({});
  const initialAnswers = questions.reduce((acc, question) => {
    acc[question] = false;
    return acc;
  }, {});
  const [answers, setAnswers] = useState(initialAnswers);

  const handleAnswerChange = (question, answer) => {
    const newAnswers = {
      ...answers,
      [question]: answer,
    };
    setAnswers(newAnswers);

    const newReturnedData = Object.keys(newAnswers).reduce(
      (acc, questionKey) => {
        acc[questionKey] = newAnswers[questionKey] ? true : false;
        return acc;
      },
      {}
    );

    setData(newReturnedData);
    setReturnedData(newReturnedData);
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
