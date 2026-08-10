import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Topic from "../models/topic.model.js";

import { getOrCreateMCQs } from "../services/mcq.service.js";

export const getMCQs = async (req, res, next) => {
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

    const mcqs = await getOrCreateMCQs({
      skill,
      module,
      topic,
    });

    return res.status(200).json({
      success: true,
      data: mcqs,
    });
  } catch (error) {
    next(error);
  }
};
