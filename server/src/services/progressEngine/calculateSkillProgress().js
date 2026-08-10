import Module from "../../models/module.model.js";
import Topic from "../../models/topic.model.js";

import { getOrCreateProgress } from "../userProgress.service.js";

import { getCompletedTopicIds, buildProgressResponse } from "./helpers.js";

export const calculateSkillProgress = async ({ userId, skillId }) => {
  const progress = await getOrCreateProgress(userId);

  const completedTopicIds = getCompletedTopicIds(progress);

  const modules = await Module.find({
    skill: skillId,
    isPublished: true,
  });

  const moduleIds = modules.map((module) => module._id);

  const topics = await Topic.find({
    module: {
      $in: moduleIds,
    },
    isPublished: true,
  });

  const completed = topics.filter((topic) =>
    completedTopicIds.includes(topic._id.toString()),
  ).length;

  return buildProgressResponse({
    id: skillId,
    completed,
    total: topics.length,
  });
};
