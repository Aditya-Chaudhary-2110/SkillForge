import Lesson from "../models/lesson.model.js";

import {
  startStudySession,
  getCurrentSession,
  endStudySession,
} from "./studySession.service.js";

import buildLearnPrompt from "../prompts/learn.prompt.js";

import { generateAIContent } from "./ai.service.js";
import { parseLessonResponse } from "./lessonParser.service.js";

import { AI_PROVIDER, AI_MODEL } from "../config/ai.config.js";

export const getLesson = async ({ skillId, moduleId, topicId }) => {
  return await Lesson.findOne({
    skill: skillId,
    module: moduleId,
    topic: topicId,
    version: 1,
  });
};

export const saveLesson = async ({
  skillId,
  moduleId,
  topicId,
  content,
  provider,
  model,
}) => {
  return await Lesson.create({
    skill: skillId,
    module: moduleId,
    topic: topicId,
    content,
    provider,
    model,
    version: 1,
  });
};

export const getOrCreateLesson = async ({ userId, skill, module, topic }) => {
  /* ==========================================
          STUDY SESSION MANAGEMENT
  ========================================== */

  const currentSession = await getCurrentSession(userId);

  if (currentSession) {
    // User opened the same topic again
    if (currentSession.topic.toString() !== topic._id.toString()) {
      await endStudySession(currentSession._id);
    }
  }

  await startStudySession({
    userId,
    skillId: skill._id,
    moduleId: module._id,
    topicId: topic._id,
  });

  /* ==========================================
                LESSON CACHE
  ========================================== */

  const existingLesson = await getLesson({
    skillId: skill._id,
    moduleId: module._id,
    topicId: topic._id,
  });

  if (existingLesson) {
    console.log(`📚 Cache Hit → ${topic.name}`);
    return existingLesson;
  }

  console.log(`🤖 Generating → ${topic.name}`);

  const prompt = buildLearnPrompt({
    skill: skill.name,
    module: module.name,
    topic: topic.name,
  });

  const aiResponse = await generateAIContent(prompt);

  const parsedContent = parseLessonResponse(aiResponse);

  const lesson = await saveLesson({
    skillId: skill._id,
    moduleId: module._id,
    topicId: topic._id,
    content: parsedContent,
    provider: AI_PROVIDER,
    model: AI_MODEL,
  });

  console.log(`✅ Saved → ${topic.name}`);

  return lesson;
};
