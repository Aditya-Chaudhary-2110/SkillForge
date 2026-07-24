import mongoose from "mongoose";

const connectSeedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "skillforge",
    });

    console.log("✅ Seed Database Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectSeedDB;
