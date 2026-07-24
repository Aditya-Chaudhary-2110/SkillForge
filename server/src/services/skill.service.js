import Skill from "../models/skill.model.js";
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
  return await Skill.find().sort({ order: 1 });
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
