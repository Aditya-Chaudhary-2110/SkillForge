import "dotenv/config";

import connectSeedDB from "./db.js";
import seedRoadmap from "./services/seedRoadmap.js";
import seedResources from "./services/seedResources.js";

const runSeed = async () => {
  try {
    await connectSeedDB();

    console.log("🌱 Starting Seed...\n");

    await seedRoadmap();

    await seedResources();

    console.log("\n🎉 Seeding Completed Successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runSeed();
