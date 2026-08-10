const extractJSONObject = (text) => {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No valid JSON found in AI response.");
  }

  return text.slice(start, end + 1);
};

export const parseAIHelper = (response) => {
  const json = extractJSONObject(response);

  const parsed = JSON.parse(json);

  return {
    simple: String(parsed.simple || "").trim(),

    example: String(parsed.example || "").trim(),

    memory: String(parsed.memory || "").trim(),

    mistake: String(parsed.mistake || "").trim(),
  };
};
