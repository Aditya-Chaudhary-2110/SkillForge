import {
  createModule,
  getAllModules,
  getModuleById,
  updateModule,
  deleteModule,
} from "../services/module.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const module = await createModule(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { module }, "Module created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const modules = await getAllModules();

  return res
    .status(200)
    .json(new ApiResponse(200, { modules }, "Modules fetched successfully"));
});

export const getById = asyncHandler(async (req, res) => {
  const module = await getModuleById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { module }, "Module fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const module = await updateModule(req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { module }, "Module updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteModule(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Module deleted successfully"));
});
