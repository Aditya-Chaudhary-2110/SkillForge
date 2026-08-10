const extractJSONObject = (text) => {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No valid JSON found in AI response.");
  }

  return text.slice(start, end + 1);
};

const cleanInterview = (data) => {
  if (!Array.isArray(data.questions)) {
    throw new Error("Invalid interview format.");
  }

  return {
    questions: data.questions.map((question) => ({
      question: String(question.question || "").trim(),

      answer: String(question.answer || "").trim(),

      difficulty: ["Easy", "Medium", "Hard"].includes(question.difficulty)
        ? question.difficulty
        : "Easy",

      tags: Array.isArray(question.tags)
        ? question.tags.map((tag) => String(tag).trim()).filter(Boolean)
        : [],
    })),
  };
};

export const parseInterview = (response) => {
  const json = extractJSONObject(response);

  const parsed = JSON.parse(json);

  return cleanInterview(parsed);
};
