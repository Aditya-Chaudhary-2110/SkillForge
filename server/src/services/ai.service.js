import { AI_PROVIDER } from "../config/ai.config.js";

import { generateGroqContent } from "./groq.service.js";

const providers = {
  groq: generateGroqContent,
};

export const generateAIContent = async (prompt) => {
  const provider = providers[AI_PROVIDER];

  if (!provider) {
    throw new Error(`Unsupported AI Provider: ${AI_PROVIDER}`);
  }

  return provider(prompt);
};
