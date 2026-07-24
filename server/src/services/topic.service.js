import Topic from "../models/topic.model.js";
import Module from "../models/module.model.js";
import ApiError from "../utils/ApiError.js";

export const createTopic = async (topicData) => {
  const { module, name, slug } = topicData;

  const existingModule = await Module.findById(module);

  if (!existingModule) {
    throw new ApiError(404, "Module not found");
  }

  const existingTopic = await Topic.findOne({
    module,
    $or: [{ name }, { slug }],
  });

  if (existingTopic) {
    throw new ApiError(
      409,
      "A topic with the same name or slug already exists for this module",
    );
  }

  const topic = await Topic.create(topicData);

  if (!topic) {
    throw new ApiError(500, "Failed to create topic");
  }

  return topic;
};

export const getAllTopics = async () => {
  return await Topic.find().populate("module", "name slug").sort({ order: 1 });
};

export const getTopicById = async (topicId) => {
  const topic = await Topic.findById(topicId).populate("module", "name slug");

  if (!topic) {
    throw new ApiError(404, "Topic not found");
  }

  return topic;
};

export const updateTopic = async (topicId, topicData) => {
  const topic = await Topic.findByIdAndUpdate(topicId, topicData, {
    new: true,
    runValidators: true,
  }).populate("module", "name slug");

  if (!topic) {
    throw new ApiError(404, "Topic not found");
  }

  return topic;
};

export const deleteTopic = async (topicId) => {
  const topic = await Topic.findByIdAndDelete(topicId);

  if (!topic) {
    throw new ApiError(404, "Topic not found");
  }

  return topic;
};
