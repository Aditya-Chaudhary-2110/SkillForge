import Skill from "../../models/skill.model.js";
import Module from "../../models/module.model.js";
import Topic from "../../models/topic.model.js";

import { coreJavaTopics } from "../topics/java/core-java.seed.js";
import { objectOrientedProgrammingTopics } from "../topics/java/object-oriented-programming.seed.js";
import { exceptionHandlingTopics } from "../topics/java/exception-handling.seed.js";
import { collectionsFrameworkTopics } from "../topics/java/collections-framework.seed.js";
import { multithreadingTopics } from "../topics/java/multithreading.seed.js";
import { fileHandlingTopics } from "../topics/java/file-handling.seed.js";
import { java8FeaturesTopics } from "../topics/java/java-8-features.seed.js";
import { genericsTopics } from "../topics/java/generics.seed.js";
import { jdbcTopics } from "../topics/java/jdbc.seed.js";
import { bestPracticesTopics } from "../topics/java/best-practices.seed.js";

import { javaSkill, javaModules } from "../skills/java.seed.js";

const topicMap = {
  "core-java": coreJavaTopics,
  "object-oriented-programming": objectOrientedProgrammingTopics,
  "exception-handling": exceptionHandlingTopics,
  "collections-framework": collectionsFrameworkTopics,
  multithreading: multithreadingTopics,
  "file-handling": fileHandlingTopics,
  "java-8-features": java8FeaturesTopics,
  generics: genericsTopics,
  jdbc: jdbcTopics,
  "best-practices": bestPracticesTopics,
};

const seedRoadmap = async () => {
  // Remove existing Java roadmap
  const existingSkill = await Skill.findOne({
    slug: javaSkill.slug,
  });

  if (existingSkill) {
    const modules = await Module.find({
      skill: existingSkill._id,
    });

    const moduleIds = modules.map((module) => module._id);

    await Topic.deleteMany({
      module: {
        $in: moduleIds,
      },
    });

    await Module.deleteMany({
      skill: existingSkill._id,
    });

    await Skill.deleteOne({
      _id: existingSkill._id,
    });

    console.log("🗑 Existing Java roadmap removed");
  }

  // Create Skill
  const createdSkill = await Skill.create(javaSkill);

  console.log(`✅ Skill Created: ${createdSkill.name}`);

  // Create Modules
  for (const moduleData of javaModules) {
    const createdModule = await Module.create({
      ...moduleData,
      skill: createdSkill._id,
    });

    console.log(`📦 Module Created: ${createdModule.name}`);

    const topics = topicMap[createdModule.slug] || [];

    for (const topic of topics) {
      await Topic.create({
        ...topic,
        module: createdModule._id,
      });
    }

    console.log(`   ↳ ${topics.length} Topics Created`);
  }
};

export default seedRoadmap;
