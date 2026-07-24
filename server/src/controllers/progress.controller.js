import {
  createProgress,
  getUserProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
} from "../services/progress.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const progress = await createProgress(req.user._id, req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { progress }, "Progress created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const progress = await getUserProgress(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, { progress }, "Progress fetched successfully"));
});

export const getById = asyncHandler(async (req, res) => {
  const progress = await getProgressById(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { progress }, "Progress fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const progress = await updateProgress(req.user._id, req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { progress }, "Progress updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteProgress(req.user._id, req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Progress deleted successfully"));
});
