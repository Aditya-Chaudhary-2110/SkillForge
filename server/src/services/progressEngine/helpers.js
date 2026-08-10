export const getCompletedTopicIds = (progress) => {
  return progress.completedTopics.map((item) => item.topic.toString());
};

export const calculatePercentage = (completed, total) => {
  if (total === 0) return 0;

  return Math.round((completed / total) * 100);
};

export const buildProgressResponse = ({ id, completed, total }) => {
  return {
    id,
    totalTopics: total,
    completedTopics: completed,
    remainingTopics: total - completed,
    percentage: calculatePercentage(completed, total),
  };
};
