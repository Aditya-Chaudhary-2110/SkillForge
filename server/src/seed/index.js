import dotenv from "dotenv";
dotenv.config();

import connectDB from "../database/db.js";

import seedSkills from "./seeders/seedSkills.js";
import seedModules from "./seeders/seedModules.js";
import seedTopics from "./seeders/seedTopics.js";

import skills from "./data/skills/index.js";
import modules from "./data/modules/index.js";
import topics from "./data/topics/index.js";

const seed = async () => {
  try {
    await connectDB();

    console.log("Starting Seed...\n");

    const createdSkills = await seedSkills(skills);

    const createdModules = await seedModules(modules, createdSkills);

    await seedTopics(topics, createdModules);

    console.log("\n Seeding Completed Successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seed();
