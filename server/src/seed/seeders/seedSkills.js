import Skill from "../../models/skill.model.js";

const seedSkills = async (skills) => {
  const createdSkills = new Map();

  for (const skillData of skills) {
    const skill = await Skill.findOneAndUpdate(
      {
        slug: skillData.slug,
      },
      skillData,
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );

    createdSkills.set(skill.slug, skill);
  }

  return createdSkills;
};

export default seedSkills;
