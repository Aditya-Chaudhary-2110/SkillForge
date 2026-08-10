import StudySession from "../models/studySession.model.js";
import UserProgress from "../models/userProgress.model.js";

export const startStudySession = async ({
  userId,
  skillId,
  moduleId,
  topicId,
}) => {
  return await StudySession.create({
    user: userId,
    skill: skillId,
    module: moduleId,
    topic: topicId,
    startedAt: new Date(),
  });
};

export const endStudySession = async (sessionId) => {
  const session = await StudySession.findById(sessionId);

  if (!session || session.isCompleted) {
    return session;
  }

  session.endedAt = new Date();

  session.durationMinutes = Math.max(
    1,
    Math.round((session.endedAt - session.startedAt) / (1000 * 60)),
  );

  session.isCompleted = true;

  await session.save();

  // ===============================
  // Update User Progress
  // ===============================

  const progress = await UserProgress.findOne({
    user: session.user,
  });

  if (progress) {
    // Total Study Hours
    progress.studyHours += session.durationMinutes / 60;

    // Today's Date (YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    const todayRecord = progress.dailyStudy.find((item) => item.date === today);

    if (todayRecord) {
      todayRecord.minutes += session.durationMinutes;
    } else {
      progress.dailyStudy.push({
        date: today,
        minutes: session.durationMinutes,
      });
    }

    await progress.save();
  }

  return session;
};

export const getCurrentSession = async (userId) => {
  return await StudySession.findOne({
    user: userId,
    isCompleted: false,
  });
};
