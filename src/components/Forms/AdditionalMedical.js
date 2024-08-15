import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CustomizedCheckbox from "./CustomizedCheckbox";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function MedicalHistory({ setData }) {
  const { t } = useTranslation();

  // Initial questions state
  const initialQuestions = {
    isHavingAllergies: false,
    isTakingMedication: false,
  };

  const initialAdditionalInfo = {
    allergies: "N/A",
    medications: "N/A",
  };

  const [answers, setAnswers] = useState(initialQuestions);
  const [additionalInfo, setAdditionalInfo] = useState(initialAdditionalInfo);

  const handleAnswerChange = (question, checked) => {
    const newAnswers = {
      ...answers,
      [question]: checked,
    };
    setAnswers(newAnswers);
  };

  const handleTextFieldChange = (field, value) => {
    const newAdditionalInfo = {
      ...additionalInfo,
      [field]: value || "N/A", // Set to "N/A" if value is empty or undefined
    };
    setAdditionalInfo(newAdditionalInfo);
  };

  useEffect(() => {
    const modifiedSelectItem = Object.keys(answers).reduce(
      (acc, questionKey) => {
        acc[questionKey] = answers[questionKey] ? true : false;
        return acc;
      },
      {}
    );
    const newReturnedData = { ...modifiedSelectItem, ...additionalInfo };
    setData(newReturnedData);
  }, [answers, additionalInfo, setData]);

  return (
    <Box>
      <Box sx={{ mr: 10 }}>
        <div>
          <CustomizedCheckbox
            question={t("isHavingAllergies")}
            value={answers.isHavingAllergies}
            onChange={(checked) =>
              handleAnswerChange("isHavingAllergies", checked)
            }
          />
          <TextField
            id="outlined-basic-allergies"
            label={t("specify")}
            variant="outlined"
            fullWidth
            value={additionalInfo.allergies}
            onChange={(e) => handleTextFieldChange("allergies", e.target.value)}
          />
        </div>
        <div>
          <CustomizedCheckbox
            question={t("isTakingMedication")}
            value={answers.isTakingMedication}
            onChange={(checked) =>
              handleAnswerChange("isTakingMedication", checked)
            }
          />
          <TextField
            id="outlined-basic-medication"
            label={t("specify")}
            variant="outlined"
            fullWidth
            value={additionalInfo.medication}
            onChange={(e) =>
              handleTextFieldChange("medications", e.target.value)
            }
          />
        </div>
      </Box>
    </Box>
  );
}
