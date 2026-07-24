import {
  createTopic,
  getAllTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
} from "../services/topic.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const topic = await createTopic(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { topic }, "Topic created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const topics = await getAllTopics();

  return res
    .status(200)
    .json(new ApiResponse(200, { topics }, "Topics fetched successfully"));
});

export const getById = asyncHandler(async (req, res) => {
  const topic = await getTopicById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { topic }, "Topic fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const topic = await updateTopic(req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { topic }, "Topic updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteTopic(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Topic deleted successfully"));
});
