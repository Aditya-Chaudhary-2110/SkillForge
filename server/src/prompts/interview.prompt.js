const interviewPrompt = ({ skill, module, topic }) => `
You are an expert Technical Interviewer.

Generate interview questions for the following topic.

Skill:
${skill.name}

Module:
${module.name}

Topic:
${topic.name}

Description:
${topic.description}

Return ONLY valid JSON.

Generate between 10 and 15 interview questions.

Questions should cover:

- Fundamentals
- Conceptual understanding
- Practical scenarios
- Follow-up questions
- Frequently asked interview questions
- Beginner to advanced progression

Every question must contain:

- question
- answer
- difficulty
- tags

Difficulty must be one of:

Easy
Medium
Hard

Tags should contain 2–5 relevant keywords.

Return JSON in this format:

{
  "questions": [
    {
      "question": "",
      "answer": "",
      "difficulty": "Easy",
      "tags": [
        "",
        ""
      ]
    }
  ]
}

Do not include markdown.

Do not include explanations outside JSON.

Do not wrap JSON inside code blocks.
`;

export default interviewPrompt;
