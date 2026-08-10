import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Topic from "../models/topic.model.js";

export const searchContent = async (query) => {
  const regex = new RegExp(query, "i");

  const [skills, modules, topics] = await Promise.all([
    Skill.find({
      isPublished: true,
      name: regex,
    })
      .select("name slug icon color")
      .limit(5),

    Module.find({
      isPublished: true,
      name: regex,
    })
      .select("name slug skill")
      .populate("skill", "name slug")
      .limit(5),

    Topic.find({
      isPublished: true,
      name: regex,
    })
      .select("name slug module")
      .populate({
        path: "module",
        select: "name slug skill",
        populate: {
          path: "skill",
          select: "name slug",
        },
      })
      .limit(5),
  ]);

  return {
    skills,
    modules,
    topics,
  };
};
