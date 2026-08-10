import MCQ from "../models/mcq.model.js";

import { AI_PROVIDER, AI_MODEL } from "../config/ai.config.js";

import { generateMCQs } from "./mcqGenerator.service.js";
import { validateMCQs } from "./mcqValidator.service.js";

export const getOrCreateMCQs = async ({ skill, module, topic }) => {
  // 1. Check cache
  const existingMCQs = await MCQ.findOne({
    topic: topic._id,
  });

  if (existingMCQs) {
    return existingMCQs;
  }

  // 2. Generate using AI

  const generatedMCQs = await generateMCQs({
    skill,
    module,
    topic,
  });

  // 3. Validate
  validateMCQs(generatedMCQs);

  // 4. Save
  const mcqs = await MCQ.create({
    skill: skill._id,
    module: module._id,
    topic: topic._id,

    questions: generatedMCQs.questions,

    provider: AI_PROVIDER,
    model: AI_MODEL,

    version: 1,
    generatedAt: new Date(),
  });

  return mcqs;
};
