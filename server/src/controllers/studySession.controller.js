import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

import UserProgress from "../models/userProgress.model.js";

import {
  startStudySession,
  endStudySession,
  getCurrentSession,
} from "../services/studySession.service.js";

export const startSession = asyncHandler(async (req, res) => {
  const existingSession = await getCurrentSession(req.user._id);

  if (existingSession) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { session: existingSession },
          "Study session already running",
        ),
      );
  }

  const progress = await UserProgress.findOne({
    user: req.user._id,
  });

  if (
    !progress ||
    !progress.lastVisitedSkill ||
    !progress.lastVisitedModule ||
    !progress.lastVisitedTopic
  ) {
    throw new ApiError(
      400,
      "Open a learning topic before starting the study session.",
    );
  }

  const session = await startStudySession({
    userId: req.user._id,
    skillId: progress.lastVisitedSkill,
    moduleId: progress.lastVisitedModule,
    topicId: progress.lastVisitedTopic,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(201, { session }, "Study session started successfully"),
    );
});

export const stopSession = asyncHandler(async (req, res) => {
  const session = await getCurrentSession(req.user._id);

  if (!session) {
    throw new ApiError(404, "No active study session found.");
  }

  const completedSession = await endStudySession(session._id);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { session: completedSession },
        "Study session completed successfully",
      ),
    );
});

export const getSession = asyncHandler(async (req, res) => {
  const session = await getCurrentSession(req.user._id);

  return res
    .status(200)
    .json(
      new ApiResponse(200, { session }, "Study session fetched successfully"),
    );
});
