import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
import app from "./app.js";
import connectDB from "./database/db.js";

dns.setDefaultResultOrder("ipv4first");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

startServer();
