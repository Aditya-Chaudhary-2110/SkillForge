import BASE_PROMPT from "./base.prompt.js";

const buildLearnPrompt = ({ skill, module, topic }) => `
${BASE_PROMPT}

========================
CONTENT TYPE
========================

Generate the COMPLETE Learn page.

========================
TOPIC INFORMATION
========================

Skill: ${skill}

Module: ${module}

Topic: ${topic}

========================
OBJECTIVE
========================

Generate premium educational content that teaches this topic from beginner level to interview level.

The explanation should feel like it was written by a Senior Software Engineer and an experienced educator.

The quality should match premium learning platforms.

Never write like ChatGPT.

Never mention AI.

========================
CONTENT REQUIREMENTS
========================

The content should:

- Teach from first principles.
- Be technically accurate.
- Be beginner friendly.
- Progress naturally toward interview level.
- Explain WHY before HOW.
- Explain internal implementation whenever applicable.
- Use professional terminology.
- Include practical software engineering examples.
- Be concise but complete.
- Never include filler text.

========================
JSON RESPONSE FORMAT
========================

Return ONLY valid JSON.

Do NOT return Markdown.

Do NOT use triple backticks.

Do NOT wrap the response inside \`\`\`json.

Do NOT explain anything outside the JSON.

The response MUST exactly match this schema.

{
  "title": "string",

  "overview": "string",

  "why": "string",

  "coreConcept": "string",

  "internalWorking": "string",

  "syntax": {
    "language": "java",
    "code": "string"
  },

  "example": {
    "language": "java",
    "code": "string"
  },

  "output": {
    "result": "string",
    "explanation": "string"
  },

  "realWorldUsage": [
    "string"
  ],

  "commonMistakes": [
    {
      "title": "string",
      "description": "string"
    }
  ],

  "bestPractices": [
    "string"
  ],

  "interviewTips": [
    "string"
  ],

  "keyTakeaways": [
    "string"
  ]
}

========================
FIELD GUIDELINES
========================

title

- Topic title.

overview

- Short introduction.

why

- Explain why this topic exists.
- Explain the real problem it solves.

coreConcept

- Explain the concept from first principles.
- Do not assume prior knowledge.

internalWorking

- Explain what happens internally.
- Include JVM behavior, memory, compiler, runtime, or implementation details whenever applicable.

syntax

- Return the official Java syntax.
- If syntax is not applicable, return:

{
  "language": "",
  "code": ""
}

example

- Return ONE clean production-quality Java example.
- The example must compile successfully.
- Include imports if required.
- Include the class declaration.
- Use meaningful variable names.
- Proper formatting.
- Minimal comments.

output

- "result" should contain the program output.
- "explanation" should explain why that output is produced.

realWorldUsage

- List practical software engineering use cases.

commonMistakes

- Explain common beginner mistakes.

bestPractices

- List industry-standard recommendations.

interviewTips

- Mention common interview questions and important points candidates usually miss.

keyTakeaways

- Summarize the topic using concise bullet points.

========================
IMPORTANT RULES
========================

Always return every field.

Never omit any property.

If something is not applicable:

Use an empty string:

""

or an empty array:

[]

The JSON must be directly parseable using JSON.parse().

Never generate fake information.

Never invent Java syntax.

Never include markdown.

Never include explanations outside the JSON.
`;

export default buildLearnPrompt;
