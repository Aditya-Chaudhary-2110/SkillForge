import Topic from "../../models/topic.model.js";
import { getOrCreateProgress } from "../userProgress.service.js";

import { getCompletedTopicIds, buildProgressResponse } from "./helpers.js";

export const calculateModuleProgress = async ({ userId, moduleId }) => {
  const progress = await getOrCreateProgress(userId);

  const completedTopicIds = getCompletedTopicIds(progress);

  const topics = await Topic.find({
    module: moduleId,
    isPublished: true,
  });

  const completed = topics.filter((topic) =>
    completedTopicIds.includes(topic._id.toString()),
  ).length;

  return buildProgressResponse({
    id: moduleId,
    completed,
    total: topics.length,
  });
};
