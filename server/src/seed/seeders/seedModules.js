import Module from "../../models/module.model.js";

const seedModules = async (modulesData, createdSkills) => {
  const createdModules = new Map();

  for (const skillModules of modulesData) {
    const skill = createdSkills.get(skillModules.skill);

    if (!skill) {
      continue;
    }

    for (const moduleData of skillModules.modules) {
      const module = await Module.findOneAndUpdate(
        {
          skill: skill._id,
          slug: moduleData.slug,
        },
        {
          ...moduleData,
          skill: skill._id,
        },
        {
          upsert: true,
          returnDocument: "after",
          setDefaultsOnInsert: true,
        },
      );

      createdModules.set(module.slug, module);
    }
  }

  return createdModules;
};

export default seedModules;
