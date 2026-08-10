export const AI_PROVIDER = process.env.AI_PROVIDER || "groq";

export const AI_MODELS = {
  groq: "llama-3.3-70b-versatile",
};

export const AI_MODEL = AI_MODELS[AI_PROVIDER];
