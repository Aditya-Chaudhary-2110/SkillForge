import Module from "../models/module.model.js";
import Skill from "../models/skill.model.js";
import ApiError from "../utils/ApiError.js";

export const createModule = async (moduleData) => {
  const { skill, name, slug } = moduleData;

  const existingSkill = await Skill.findById(skill);

  if (!existingSkill) {
    throw new ApiError(404, "Skill not found");
  }

  const existingModule = await Module.findOne({
    skill,
    $or: [{ name }, { slug }],
  });

  if (existingModule) {
    throw new ApiError(
      409,
      "A module with the same name or slug already exists for this skill",
    );
  }

  const module = await Module.create(moduleData);

  if (!module) {
    throw new ApiError(500, "Failed to create module");
  }

  return module;
};

export const getAllModules = async () => {
  return await Module.find().populate("skill", "name slug").sort({ order: 1 });
};

export const getModuleById = async (moduleId) => {
  const module = await Module.findById(moduleId).populate("skill", "name slug");

  if (!module) {
    throw new ApiError(404, "Module not found");
  }

  return module;
};

export const updateModule = async (moduleId, moduleData) => {
  const module = await Module.findByIdAndUpdate(moduleId, moduleData, {
    new: true,
    runValidators: true,
  }).populate("skill", "name slug");

  if (!module) {
    throw new ApiError(404, "Module not found");
  }

  return module;
};

export const deleteModule = async (moduleId) => {
  const module = await Module.findByIdAndDelete(moduleId);

  if (!module) {
    throw new ApiError(404, "Module not found");
  }

  return module;
};
