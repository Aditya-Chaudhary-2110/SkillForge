import { calculateOverallProgress } from "./calculateOverallProgress.js";
import { getContinueLearning } from "./getContinueLearning.js";
import { getRecentlyCompleted } from "./getRecentlyCompleted.js";
import { getSkillProgressList } from "./getSkillProgressList.js";

import UserProgress from "../../models/userProgress.model.js";

export const buildDashboard = async ({ userId }) => {
  const [
    overallProgress,
    continueLearning,
    recentActivity,
    progress,
    skillProgress,
  ] = await Promise.all([
    calculateOverallProgress({ userId }),

    getContinueLearning({ userId }),

    getRecentlyCompleted({ userId }),

    UserProgress.findOne({
      user: userId,
    }),

    getSkillProgressList({ userId }),
  ]);

  return {
    overallProgress,

    continueLearning,

    recentActivity,

    skillProgress,

    quickStats: {
      topicsCompleted: progress?.completedTopics.length || 0,

      studyHours: progress?.studyHours || 0,

      currentStreak: progress?.currentStreak || 0,

      longestStreak: progress?.longestStreak || 0,
    },
  };
};
