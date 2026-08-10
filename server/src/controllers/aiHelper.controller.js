import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Topic from "../models/topic.model.js";

import { getOrCreateAIHelper } from "../services/aiHelper.service.js";

export const getAIHelper = async (req, res, next) => {
  try {
    const { skillSlug, moduleSlug, topicSlug } = req.body;

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

    const helper = await getOrCreateAIHelper({
      skill,
      module,
      topic,
    });

    return res.status(200).json({
      success: true,
      data: {
        simple: helper.simple,
        example: helper.example,
        memory: helper.memory,
        mistake: helper.mistake,
      },
    });
  } catch (error) {
    next(error);
  }
};
