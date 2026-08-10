const VALID_DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const validateMCQs = (mcqData) => {
  if (!mcqData) {
    throw new Error("MCQ data is missing.");
  }

  if (!Array.isArray(mcqData.questions)) {
    throw new Error("Questions must be an array.");
  }

  if (mcqData.questions.length === 0) {
    throw new Error("At least one MCQ is required.");
  }

  mcqData.questions.forEach((question, index) => {
    if (!question.question) {
      throw new Error(`Question ${index + 1} is missing.`);
    }

    if (!Array.isArray(question.options)) {
      throw new Error(`Options must be an array for question ${index + 1}.`);
    }

    if (question.options.length !== 4) {
      throw new Error(`Question ${index + 1} must contain exactly 4 options.`);
    }

    question.options.forEach((option, optionIndex) => {
      if (!option.text) {
        throw new Error(
          `Option ${optionIndex + 1} is empty for question ${index + 1}.`,
        );
      }
    });

    if (!question.correctAnswer) {
      throw new Error(`Correct answer is missing for question ${index + 1}.`);
    }

    const optionIds = question.options.map((option) => option.id);

    if (!optionIds.includes(question.correctAnswer)) {
      throw new Error(
        `Correct answer does not match any option ID in question ${index + 1}.`,
      );
    }

    if (!question.explanation) {
      throw new Error(`Explanation is missing for question ${index + 1}.`);
    }

    if (!VALID_DIFFICULTIES.includes(question.difficulty)) {
      throw new Error(`Invalid difficulty in question ${index + 1}.`);
    }
  });

  return true;
};
