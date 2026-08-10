export const validateAIHelper = (data) => {
  if (!data) {
    throw new Error("AI Helper response is missing.");
  }

  const requiredFields = ["simple", "example", "memory", "mistake"];

  requiredFields.forEach((field) => {
    if (typeof data[field] !== "string" || data[field].trim().length === 0) {
      throw new Error(`${field} response is missing.`);
    }
  });

  return true;
};
