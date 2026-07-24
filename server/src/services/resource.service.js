import Resource from "../models/resource.model.js";
import Topic from "../models/topic.model.js";
import ApiError from "../utils/ApiError.js";

export const createResource = async (resourceData) => {
  const { topic, type } = resourceData;

  const existingTopic = await Topic.findById(topic);

  if (!existingTopic) {
    throw new ApiError(404, "Topic not found");
  }

  const existingResource = await Resource.findOne({
    topic,
    type,
  });

  if (existingResource) {
    throw new ApiError(409, `A ${type} resource already exists for this topic`);
  }

  const resource = await Resource.create(resourceData);

  if (!resource) {
    throw new ApiError(500, "Failed to create resource");
  }

  return resource;
};

export const getAllResources = async () => {
  return await Resource.find()
    .populate("topic", "name slug")
    .sort({ order: 1 });
};

export const getResourceById = async (resourceId) => {
  const resource = await Resource.findById(resourceId).populate(
    "topic",
    "name slug",
  );

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return resource;
};

export const updateResource = async (resourceId, resourceData) => {
  const resource = await Resource.findByIdAndUpdate(resourceId, resourceData, {
    new: true,
    runValidators: true,
  }).populate("topic", "name slug");

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return resource;
};

export const deleteResource = async (resourceId) => {
  const resource = await Resource.findByIdAndDelete(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return resource;
};

export const getResourcesByTopic = async (topicId) => {
  const topic = await Topic.findById(topicId);

  if (!topic) {
    throw new ApiError(404, "Topic not found");
  }

  const resources = await Resource.find({
    topic: topicId,
    isPublished: true,
  }).sort({ order: 1 });

  return resources;
};
