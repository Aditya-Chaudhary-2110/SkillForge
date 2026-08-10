const extractJSONObject = (text) => {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No valid JSON found in AI response.");
  }

  return text.slice(start, end + 1);
};

export const parseMCQs = (response) => {
  const json = extractJSONObject(response);

  const parsed = JSON.parse(json);

  if (!Array.isArray(parsed.questions)) {
    throw new Error("Invalid MCQ response.");
  }

  return {
    questions: parsed.questions.map((question) => ({
      question: String(question.question).trim(),

      options: question.options.map((option) => ({
        id: String(option.id).trim(),
        text: String(option.text).trim(),
      })),

      correctAnswer: String(question.correctAnswer).trim(),

      explanation: String(question.explanation).trim(),

      difficulty: String(question.difficulty).trim(),
    })),
  };
};
