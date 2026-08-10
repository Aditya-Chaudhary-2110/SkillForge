import UserProgress from "../../models/userProgress.model.js";
import Topic from "../../models/topic.model.js";

export const getContinueLearning = async ({ userId }) => {
  const progress = await UserProgress.findOne({
    user: userId,
  })
    .populate("lastVisitedSkill")
    .populate("lastVisitedModule")
    .populate("lastVisitedTopic");

  if (!progress || !progress.lastVisitedTopic) {
    return null;
  }

  const moduleTopics = await Topic.find({
    module: progress.lastVisitedModule._id,
    isPublished: true,
  });

  const totalTopics = moduleTopics.length;

  const completedIds = progress.completedTopics.map((item) =>
    item.topic.toString(),
  );

  const completedTopics = moduleTopics.filter((topic) =>
    completedIds.includes(topic._id.toString()),
  ).length;

  const remainingTopics = totalTopics - completedTopics;

  return {
    skill: progress.lastVisitedSkill,
    module: progress.lastVisitedModule,
    topic: progress.lastVisitedTopic,

    totalTopics,
    completedTopics,
    remainingTopics,

    percentage:
      totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100),

    estimatedRemainingMinutes:
      remainingTopics * progress.lastVisitedTopic.estimatedTime,
  };
};
