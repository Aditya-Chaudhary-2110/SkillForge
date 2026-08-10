import Topic from "../models/topic.model.js";

import {
  markTopicComplete,
  markTopicIncomplete,
  getUserProgress,
  updateLastVisited,
} from "../services/userProgress.service.js";

export const completeTopic = async (req, res, next) => {
  try {
    const { topicId } = req.body;

    const topic = await Topic.findById(topicId);

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    const progress = await markTopicComplete({
      userId: req.user._id,
      topicId,
    });

    return res.status(200).json({
      success: true,
      message: "Topic marked as completed.",
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};

export const uncompleteTopic = async (req, res, next) => {
  try {
    const { topicId } = req.body;

    const topic = await Topic.findById(topicId);

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    const progress = await markTopicIncomplete({
      userId: req.user._id,
      topicId,
    });

    return res.status(200).json({
      success: true,
      message: "Topic marked as incomplete.",
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};

export const getProgress = async (req, res, next) => {
  try {
    const progress = await getUserProgress(req.user._id);

    return res.status(200).json({
      success: true,
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};

export const saveLastVisited = async (req, res, next) => {
  try {
    const { skillId, moduleId, topicId } = req.body;

    const progress = await updateLastVisited({
      userId: req.user._id,
      skillId,
      moduleId,
      topicId,
    });

    return res.status(200).json({
      success: true,
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};
