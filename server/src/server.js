import dotenv from "dotenv";
import dns from "dns";
import app from "./app.js";
import connectDB from "./database/db.js";

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

startServer();
