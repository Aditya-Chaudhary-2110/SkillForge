import {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
} from "../services/skill.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const skill = await createSkill(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { skill }, "Skill created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const skills = await getAllSkills();

  return res
    .status(200)
    .json(new ApiResponse(200, { skills }, "Skills fetched successfully"));
});

export const getById = asyncHandler(async (req, res) => {
  const skill = await getSkillById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { skill }, "Skill fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const skill = await updateSkill(req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { skill }, "Skill updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteSkill(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Skill deleted successfully"));
});
