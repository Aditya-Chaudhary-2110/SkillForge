import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Topic from "../models/topic.model.js";

export const getRoadmap = async (skillSlug) => {
  const skill = await Skill.findOne({
    slug: skillSlug,
    isPublished: true,
  }).lean();

  if (!skill) {
    return null;
  }

  const modules = await Module.find({
    skill: skill._id,
    isPublished: true,
  })
    .sort({ order: 1 })
    .lean();

  const roadmap = [];

  for (const module of modules) {
    const topics = await Topic.find({
      module: module._id,
      isPublished: true,
    })
      .sort({ order: 1 })
      .lean();

    roadmap.push({
      ...module,
      topics,
    });
  }

  const firstModule = roadmap[0] || null;
  const firstTopic =
    firstModule && firstModule.topics.length ? firstModule.topics[0] : null;

  return {
    skill,
    modules: roadmap,
    firstModule,
    firstTopic,
  };
};
