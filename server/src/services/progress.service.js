import Progress from "../models/progress.model.js";
import Topic from "../models/topic.model.js";
import ApiError from "../utils/ApiError.js";
import { syncUserProgress } from "./userProgress.service.js";

export const createProgress = async (userId, progressData) => {
  const { topic, isCompleted = false } = progressData;

  const existingTopic = await Topic.findById(topic);

  if (!existingTopic) {
    throw new ApiError(404, "Topic not found");
  }

  const existingProgress = await Progress.findOne({
    user: userId,
    topic,
  });

  if (existingProgress) {
    throw new ApiError(409, "Progress already exists");
  }

  const progress = await Progress.create({
    user: userId,
    topic,
    isCompleted,
    completedAt: isCompleted ? new Date() : null,
  });

  await syncUserProgress(userId);

  return progress;
};

export const getUserProgress = async (userId) => {
  return await Progress.find({ user: userId })
    .populate("topic", "name slug")
    .sort({ createdAt: -1 });
};

export const getProgressById = async (userId, progressId) => {
  const progress = await Progress.findOne({
    _id: progressId,
    user: userId,
  }).populate("topic", "name slug");

  if (!progress) {
    throw new ApiError(404, "Progress not found");
  }

  return progress;
};

export const updateProgress = async (userId, progressId, progressData) => {
  if ("isCompleted" in progressData) {
    progressData.completedAt = progressData.isCompleted ? new Date() : null;
  }

  const progress = await Progress.findOneAndUpdate(
    {
      _id: progressId,
      user: userId,
    },
    progressData,
    {
      new: true,
      runValidators: true,
    },
  ).populate("topic", "name slug");

  if (!progress) {
    throw new ApiError(404, "Progress not found");
  }

  await syncUserProgress(userId);

  return progress;
};

export const deleteProgress = async (userId, progressId) => {
  const progress = await Progress.findOneAndDelete({
    _id: progressId,
    user: userId,
  });

  if (!progress) {
    throw new ApiError(404, "Progress not found");
  }

  await syncUserProgress(userId);

  return progress;
};
