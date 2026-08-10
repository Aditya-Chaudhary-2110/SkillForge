import Skill from "../../models/skill.model.js";
import Module from "../../models/module.model.js";
import Topic from "../../models/topic.model.js";

import { getOrCreateProgress } from "../userProgress.service.js";

export const getSkillProgressList = async ({ userId }) => {
  const progress = await getOrCreateProgress(userId);

  const completedTopicIds = progress.completedTopics.map((item) =>
    item.topic.toString(),
  );

  const skills = await Skill.find({
    isPublished: true,
  }).sort({
    order: 1,
  });

  const result = [];

  for (const skill of skills) {
    const modules = await Module.find({
      skill: skill._id,
      isPublished: true,
    });

    const moduleIds = modules.map((module) => module._id);

    const topics = await Topic.find({
      module: {
        $in: moduleIds,
      },
      isPublished: true,
    });

    const totalTopics = topics.length;

    const completedTopics = topics.filter((topic) =>
      completedTopicIds.includes(topic._id.toString()),
    ).length;

    const progressPercentage =
      totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

    // Don't show skills that haven't been started.
    if (progressPercentage === 0) continue;

    result.push({
      _id: skill._id,
      name: skill.name,
      slug: skill.slug,

      totalTopics,
      completedTopics,
      remainingTopics: totalTopics - completedTopics,

      progress: progressPercentage,

      completed: progressPercentage === 100,

      isCurrent:
        progress.lastVisitedSkill &&
        progress.lastVisitedSkill.toString() === skill._id.toString(),
    });
  }

  // Current learning skill first, then highest progress.
  result.sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;

    return b.progress - a.progress;
  });

  return result;
};
