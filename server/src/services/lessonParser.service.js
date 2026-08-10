export const parseLessonResponse = (response) => {
  try {
    if (!response || typeof response !== "string") {
      throw new Error("Invalid AI response.");
    }

    let cleaned = response.trim();

    // Remove markdown fences if the model accidentally returns them
    cleaned = cleaned.replace(/^```json\s*/i, "");
    cleaned = cleaned.replace(/^```\s*/i, "");
    cleaned = cleaned.replace(/```$/i, "");

    cleaned = cleaned.trim();

    const lesson = JSON.parse(cleaned);

    const requiredFields = [
      "title",
      "overview",
      "why",
      "coreConcept",
      "internalWorking",
      "syntax",
      "example",
      "output",
      "realWorldUsage",
      "commonMistakes",
      "bestPractices",
      "interviewTips",
      "keyTakeaways",
    ];

    for (const field of requiredFields) {
      if (!(field in lesson)) {
        throw new Error(`Missing field: ${field}`);
      }
    }

    return lesson;
  } catch (error) {
    console.error("Lesson Parser Error:", error);
    throw new Error("Failed to parse lesson.");
  }
};
