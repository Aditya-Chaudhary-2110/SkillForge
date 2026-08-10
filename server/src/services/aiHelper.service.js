import AIHelper from "../models/aiHelper.model.js";

import { AI_PROVIDER, AI_MODEL } from "../config/ai.config.js";

import { generateAIHelper } from "./aiHelperGenerator.service.js";
import { validateAIHelper } from "./aiHelperValidator.service.js";

export const getOrCreateAIHelper = async ({ skill, module, topic }) => {
  // 1. Check cache
  const existingHelper = await AIHelper.findOne({
    topic: topic._id,
  });

  if (existingHelper) {
    return existingHelper;
  }

  // 2. Generate using AI

  const generatedHelper = await generateAIHelper({
    skill,
    module,
    topic,
  });

  // 3. Validate
  validateAIHelper(generatedHelper);

  // 4. Save
  const helper = await AIHelper.create({
    skill: skill._id,
    module: module._id,
    topic: topic._id,

    simple: generatedHelper.simple,
    example: generatedHelper.example,
    memory: generatedHelper.memory,
    mistake: generatedHelper.mistake,

    provider: AI_PROVIDER,
    model: AI_MODEL,

    version: 1,
    generatedAt: new Date(),
  });

  return helper;
};
