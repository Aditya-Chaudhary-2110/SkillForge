export const buildAIHelperPrompt = ({ skill, module, topic }) => `
You are an expert technical educator.

Generate ONLY valid JSON.

Your job is to help beginners understand the topic better.

Skill:
${skill.name}

Module:
${module.name}

Topic:
${topic.name}

Description:
${topic.description}

Generate exactly these four sections.

Rules:

- Keep every response concise.
- Maximum 120 words per section.
- Use beginner-friendly language.
- Do NOT repeat the lesson.
- Do NOT use markdown.
- Do NOT wrap in code fences.
- Return ONLY valid JSON.

JSON format:

{
  "simple": "Explain the topic in very simple language as if teaching a beginner.",

  "example": "Give one practical real-world example that makes the topic easy to understand.",

  "memory": "Give one memorable trick or analogy that helps remember the concept.",

  "mistake": "Mention the most common beginner mistake and how to avoid it."
}
`;
