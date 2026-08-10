import Profile from "../models/profile.model.js";
import UserProgress from "../models/userProgress.model.js";

export const getOrCreateProfile = async (userId) => {
  let profile = await Profile.findOne({
    user: userId,
  });

  if (!profile) {
    profile = await Profile.create({
      user: userId,
    });
  }

  return profile;
};

export const updateProfile = async (userId, updates) => {
  const profile = await getOrCreateProfile(userId);

  const allowedFields = [
    "avatar",
    "bio",
    "github",
    "linkedin",
    "portfolio",
    "location",
    "education",
    "experience",
    "targetRole",
    "targetCompany",
    "targetPackage",
    "preferredLanguage",
    "preferredTheme",
  ];

  for (const field of allowedFields) {
    if (updates[field] !== undefined) {
      profile[field] = updates[field];
    }
  }

  await profile.save();

  return profile;
};

export const getProfile = async (userId) => {
  const profile = await getOrCreateProfile(userId);

  const progress = await UserProgress.findOne({
    user: userId,
  });

  return {
    profile,
    stats: {
      completedTopics: progress?.completedTopics.length || 0,
      studyHours: progress?.studyHours || 0,
      currentStreak: progress?.currentStreak || 0,
      longestStreak: progress?.longestStreak || 0,
    },
  };
};
