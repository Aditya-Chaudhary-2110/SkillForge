import { getRoadmap } from "../services/roadmap.service.js";

export const getSkillRoadmap = async (req, res, next) => {
  try {
    const { skillSlug } = req.params;

    const roadmap = await getRoadmap(skillSlug);

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};
