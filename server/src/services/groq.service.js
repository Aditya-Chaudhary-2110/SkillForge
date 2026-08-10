import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";
import { AI_MODEL } from "../config/ai.config.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateGroqContent = async (prompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: AI_MODEL,
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);
    throw new Error("Failed to generate content from Groq.");
  }
};
