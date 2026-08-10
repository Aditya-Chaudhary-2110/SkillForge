import { generateAIContent } from "./ai.service.js";
import { buildMCQPrompt } from "../prompts/mcq.prompt.js";
import { parseMCQs } from "./mcqParser.service.js";

export const generateMCQs = async ({ skill, module, topic }) => {
  const prompt = buildMCQPrompt({
    skill,
    module,
    topic,
  });

  const response = await generateAIContent(prompt);

  return parseMCQs(response);
};
