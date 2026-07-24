import {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
  getResourcesByTopic,
} from "../services/resource.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const create = asyncHandler(async (req, res) => {
  const resource = await createResource(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, { resource }, "Resource created successfully"));
});

export const getAll = asyncHandler(async (req, res) => {
  const resources = await getAllResources();

  return res
    .status(200)
    .json(
      new ApiResponse(200, { resources }, "Resources fetched successfully"),
    );
});

export const getById = asyncHandler(async (req, res) => {
  const resource = await getResourceById(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, { resource }, "Resource fetched successfully"));
});

export const update = asyncHandler(async (req, res) => {
  const resource = await updateResource(req.params.id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, { resource }, "Resource updated successfully"));
});

export const remove = asyncHandler(async (req, res) => {
  await deleteResource(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Resource deleted successfully"));
});

export const getByTopic = asyncHandler(async (req, res) => {
  const resources = await getResourcesByTopic(req.params.topicId);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { resources },
        "Topic resources fetched successfully",
      ),
    );
});
