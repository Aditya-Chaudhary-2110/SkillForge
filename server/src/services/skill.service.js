import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Topic from "../models/topic.model.js";

import ApiError from "../utils/ApiError.js";

export const createSkill = async (skillData) => {
  const { name, slug } = skillData;

  const existingSkill = await Skill.findOne({
    $or: [{ name }, { slug }],
  });

  if (existingSkill) {
    throw new ApiError(409, "Skill already exists");
  }

  const skill = await Skill.create(skillData);

  if (!skill) {
    throw new ApiError(500, "Failed to create skill");
  }

  return skill;
};

export const getAllSkills = async () => {
  const skills = await Skill.find({
    isPublished: true,
  })
    .sort({ order: 1 })
    .lean();

  const result = [];

  for (const skill of skills) {
    const modules = await Module.find({
      skill: skill._id,
      isPublished: true,
    }).select("_id");

    const moduleIds = modules.map((module) => module._id);

    const totalTopics = await Topic.countDocuments({
      module: {
        $in: moduleIds,
      },
      isPublished: true,
    });

    result.push({
      ...skill,
      totalTopics,
    });
  }

  return result;
};

export const getSkillById = async (skillId) => {
  const skill = await Skill.findById(skillId);

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  return skill;
};

export const updateSkill = async (skillId, skillData) => {
  const skill = await Skill.findByIdAndUpdate(skillId, skillData, {
    new: true,
    runValidators: true,
  });

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  return skill;
};

export const deleteSkill = async (skillId) => {
  const skill = await Skill.findByIdAndDelete(skillId);

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  return skill;
};
