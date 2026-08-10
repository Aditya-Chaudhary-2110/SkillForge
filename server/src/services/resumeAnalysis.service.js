import groq from "../config/groq.config.js";
import { AI_MODEL } from "../config/ai.config.js";

const SYSTEM_PROMPT = `
You are an expert ATS Resume Analyzer, Senior Software Engineering Recruiter, and Career Coach.

Analyze the given resume carefully.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT explain anything.
4. Do NOT wrap the JSON inside \`\`\`.
5. If any information is unavailable, return an empty string or empty array.
6. ATS score must be between 0 and 100.

Return exactly this JSON:

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "skillsDetected": [],
  "missingSkills": [],
  "projectsFeedback": [],
  "educationFeedback": "",
  "experienceFeedback": "",
  "overallSuggestions": []
}
`;

export const analyzeResume = async (resumeText) => {
  const completion = await groq.chat.completions.create({
    model: AI_MODEL,
    temperature: 0.2,
    response_format: {
      type: "json_object",
    },
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: resumeText,
      },
    ],
  });

  const response = completion.choices[0].message.content;

  return JSON.parse(response);
};
