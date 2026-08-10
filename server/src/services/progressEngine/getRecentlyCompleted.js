import UserProgress from "../../models/userProgress.model.js";

export const getRecentlyCompleted = async ({ userId, limit = 5 }) => {
  const progress = await UserProgress.findOne({
    user: userId,
  }).populate("completedTopics.topic");

  if (!progress) {
    return [];
  }

  return progress.completedTopics
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
    .slice(0, limit)
    .map((item) => ({
      type: "topic_completed",

      title: `Completed ${item.topic.name}`,

      topic: item.topic,

      completedAt: item.completedAt,
    }));
};
