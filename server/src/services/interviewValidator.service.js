const VALID_DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const validateInterview = (interview) => {
  if (!interview) {
    throw new Error("Interview data is missing.");
  }

  if (!Array.isArray(interview.questions)) {
    throw new Error("Interview questions must be an array.");
  }

  if (interview.questions.length === 0) {
    throw new Error("Interview must contain at least one question.");
  }

  interview.questions.forEach((question, index) => {
    if (!question.question) {
      throw new Error(`Question ${index + 1} is missing.`);
    }

    if (!question.answer) {
      throw new Error(`Answer is missing for question ${index + 1}.`);
    }

    if (!VALID_DIFFICULTIES.includes(question.difficulty)) {
      throw new Error(`Invalid difficulty for question ${index + 1}.`);
    }

    if (!Array.isArray(question.tags)) {
      throw new Error(`Tags must be an array for question ${index + 1}.`);
    }
  });

  return true;
};
