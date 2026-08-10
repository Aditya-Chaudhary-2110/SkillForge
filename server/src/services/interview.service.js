import Interview from "../models/interview.model.js";

import { AI_PROVIDER, AI_MODEL } from "../config/ai.config.js";

import interviewPrompt from "../prompts/interview.prompt.js";

import { generateAIContent } from "./ai.service.js";
import { parseInterview } from "./interviewParser.service.js";
import { validateInterview } from "./interviewValidator.service.js";

export const getOrCreateInterview = async ({ skill, module, topic }) => {
  // 1. Check if interview already exists
  const existingInterview = await Interview.findOne({
    topic: topic._id,
  });

  if (existingInterview) {
    return existingInterview;
  }

  // 2. Generate using AI
  const prompt = interviewPrompt({
    skill,
    module,
    topic,
  });

  const aiResponse = await generateAIContent(prompt);

  // 3. Parse AI response
  const parsedInterview = parseInterview(aiResponse);

  // 4. Validate parsed interview
  validateInterview(parsedInterview);

  // 5. Save interview
  const interview = await Interview.create({
    skill: skill._id,
    module: module._id,
    topic: topic._id,

    questions: parsedInterview.questions,

    provider: AI_PROVIDER,
    model: AI_MODEL,

    version: 1,
    generatedAt: new Date(),
  });

  return interview;
};
