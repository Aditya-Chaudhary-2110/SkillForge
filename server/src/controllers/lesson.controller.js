import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Topic from "../models/topic.model.js";
import { updateLastVisited } from "../services/userProgress.service.js";

import { getOrCreateLesson } from "../services/lesson.service.js";

export const getLesson = async (req, res, next) => {
  try {
    const { skillSlug, moduleSlug, topicSlug } = req.params;

    const skill = await Skill.findOne({
      slug: skillSlug,
      isPublished: true,
    });

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    const module = await Module.findOne({
      skill: skill._id,
      slug: moduleSlug,
      isPublished: true,
    });

    if (!module) {
      return res.status(404).json({
        success: false,
        message: "Module not found",
      });
    }

    const topic = await Topic.findOne({
      module: module._id,
      slug: topicSlug,
      isPublished: true,
    });

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    let lesson = await getOrCreateLesson({
      userId: req.user._id,
      skill,
      module,
      topic,
    });

    // Populate references for frontend
    lesson = await lesson.populate([
      {
        path: "topic",
        select: "name slug estimatedTime difficulty",
      },
      {
        path: "module",
        select: "name slug",
      },
      {
        path: "skill",
        select: "name slug",
      },
    ]);

    await updateLastVisited({
      userId: req.user._id,
      skillId: skill._id,
      moduleId: module._id,
      topicId: topic._id,
    });

    return res.status(200).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};
