export const buildMCQPrompt = ({ skill, module, topic }) => `
You are a senior technical educator.

Generate EXACTLY 10 multiple choice questions.

Skill:
${skill.name}

Module:
${module.name}

Topic:
${topic.name}

Description:
${topic.description}

Rules:

- Return ONLY valid JSON.
- No markdown.
- No code fences.
- No explanations outside JSON.
- Questions should test understanding, not memorization.
- Difficulty should be mixed.
- Every question must have exactly 4 options.
- Option IDs must be A, B, C and D.
- correctAnswer must contain ONLY the option ID.
- explanation should explain why the answer is correct.

Return this exact structure:

{
  "questions":[
    {
      "question":"...",
      "options":[
        {
          "id":"A",
          "text":"..."
        },
        {
          "id":"B",
          "text":"..."
        },
        {
          "id":"C",
          "text":"..."
        },
        {
          "id":"D",
          "text":"..."
        }
      ],
      "correctAnswer":"A",
      "explanation":"...",
      "difficulty":"Easy"
    }
  ]
}
`;
