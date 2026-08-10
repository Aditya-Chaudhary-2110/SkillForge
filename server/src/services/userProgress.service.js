import UserProgress from "../models/userProgress.model.js";
import Progress from "../models/progress.model.js";
import Topic from "../models/topic.model.js";

/* ==========================================================
GET OR CREATE USER PROGRESS
========================================================== */

export const getOrCreateProgress = async (userId) => {
  let progress = await UserProgress.findOne({
    user: userId,
  });

  if (!progress) {
    progress = await UserProgress.create({
      user: userId,
    });
  }

  return progress;
};

/* ==========================================================
GET LOCAL DATE - YYYY-MM-DD
========================================================== */

const getLocalDateString = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/* ==========================================================
SYNCHRONIZE USER PROGRESS
========================================================== */

export const syncUserProgress = async (userId) => {
  const userProgress = await getOrCreateProgress(userId);

  const progressRecords = await Progress.find({
    user: userId,
  }).populate({
    path: "topic",
    populate: {
      path: "module",
      populate: {
        path: "skill",
      },
    },
  });

  const completedTopics = progressRecords
    .filter((item) => item.isCompleted)
    .map((item) => ({
      topic: item.topic._id,
      completedAt: item.completedAt,
    }));

  userProgress.completedTopics = completedTopics;

  const latestVisited = progressRecords.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
  )[0];

  if (latestVisited) {
    userProgress.lastVisitedTopic = latestVisited.topic._id;
    userProgress.lastVisitedModule = latestVisited.topic.module._id;
    userProgress.lastVisitedSkill = latestVisited.topic.module.skill._id;
    userProgress.lastVisitedAt = latestVisited.updatedAt;
  } else {
    userProgress.lastVisitedTopic = null;
    userProgress.lastVisitedModule = null;
    userProgress.lastVisitedSkill = null;
    userProgress.lastVisitedAt = null;
  }

  await userProgress.save();

  return userProgress;
};

/* ==========================================================
UPDATE CONTINUE LEARNING
========================================================== */

export const updateLastVisited = async ({
  userId,
  skillId,
  moduleId,
  topicId,
}) => {
  const progress = await getOrCreateProgress(userId);

  progress.lastVisitedSkill = skillId;
  progress.lastVisitedModule = moduleId;
  progress.lastVisitedTopic = topicId;
  progress.lastVisitedAt = new Date();

  await progress.save();

  return progress;
};

/* ==========================================================
MARK TOPIC COMPLETE
========================================================== */

export const markTopicComplete = async ({ userId, topicId }) => {
  const progress = await getOrCreateProgress(userId);

  const alreadyCompleted = progress.completedTopics.find(
    (item) => item.topic.toString() === topicId.toString(),
  );

  if (!alreadyCompleted) {
    progress.completedTopics.push({
      topic: topicId,
      completedAt: new Date(),
    });

    await progress.save();
  }

  return progress;
};

/* ==========================================================
MARK TOPIC INCOMPLETE
========================================================== */

export const markTopicIncomplete = async ({ userId, topicId }) => {
  const progress = await getOrCreateProgress(userId);

  progress.completedTopics = progress.completedTopics.filter(
    (item) => item.topic.toString() !== topicId.toString(),
  );

  await progress.save();

  return progress;
};

/* ==========================================================
GET USER PROGRESS
========================================================== */

export const getUserProgress = async (userId) => {
  const progress = await UserProgress.findOne({
    user: userId,
  })
    .populate({
      path: "completedTopics.topic",
      select: "name slug",
    })
    .populate({
      path: "lastVisitedSkill",
      select: "name slug",
    })
    .populate({
      path: "lastVisitedModule",
      select: "name slug",
    })
    .populate({
      path: "lastVisitedTopic",
      select: "name slug estimatedTime",
    });

  if (!progress) return null;

  /* ========================================================
  OVERALL PROGRESS
  ======================================================== */

  const totalTopics = await Topic.countDocuments({
    isPublished: true,
  });

  const completedTopicsCount = progress.completedTopics.length;

  const completionPercentage =
    totalTopics === 0
      ? 0
      : Math.round((completedTopicsCount / totalTopics) * 100);

  /* ========================================================
  TODAY'S ACTIVITY
  ======================================================== */

  const today = getLocalDateString();

  /* --------------------------------------------------------
  Today's completed topics
  -------------------------------------------------------- */

  const todaysCompletedTopics = progress.completedTopics.filter((item) => {
    if (!item.completedAt) return false;

    const completedDate = new Date(item.completedAt);

    const year = completedDate.getFullYear();
    const month = String(completedDate.getMonth() + 1).padStart(2, "0");
    const day = String(completedDate.getDate()).padStart(2, "0");

    const completedDateString = `${year}-${month}-${day}`;

    return completedDateString === today;
  });

  const latestCompletedTopic =
    todaysCompletedTopics.length > 0
      ? todaysCompletedTopics.reduce((latest, current) => {
          if (!latest) return current;

          return new Date(current.completedAt) > new Date(latest.completedAt)
            ? current
            : latest;
        }, null)
      : null;

  /* --------------------------------------------------------
  Today's study time
  -------------------------------------------------------- */

  const todayStudyRecord = progress.dailyStudy.find(
    (item) => item.date === today,
  );

  const studyMinutes = todayStudyRecord?.minutes ?? 0;

  /* ========================================================
  TODAY ACTIVITY OBJECT
  ======================================================== */

  const todayActivity = {
    completedTopics: todaysCompletedTopics.length,
    studyMinutes,
    latestCompletedTopic,
  };

  /* ========================================================
  RETURN
  ======================================================== */

  return {
    ...progress.toObject(),

    totalTopics,
    completedTopicsCount,
    completionPercentage,

    todayActivity,
  };
};
