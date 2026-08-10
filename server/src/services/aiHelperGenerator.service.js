import { generateAIContent } from "./ai.service.js";
import { buildAIHelperPrompt } from "../prompts/aiHelper.prompt.js";
import { parseAIHelper } from "./aiHelperParser.service.js";

export const generateAIHelper = async ({ skill, module, topic }) => {
  const prompt = buildAIHelperPrompt({
    skill,
    module,
    topic,
  });

  const response = await generateAIContent(prompt);

  return parseAIHelper(response);
};
