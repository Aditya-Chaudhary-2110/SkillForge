import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import skillRoutes from "./routes/skill.routes.js";
import moduleRoutes from "./routes/module.routes.js";
import topicRoutes from "./routes/topic.routes.js";
import resourceRoutes from "./routes/resource.routes.js";
import progressRoutes from "./routes/progress.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";
import folderRoutes from "./routes/folder.routes.js";
import noteRoutes from "./routes/note.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/modules", moduleRoutes);
app.use("/api/v1/topics", topicRoutes);
app.use("/api/v1/resources", resourceRoutes);
app.use("/api/v1/progress", progressRoutes);
app.use("/api/v1/bookmarks", bookmarkRoutes);
app.use("/api/v1/folders", folderRoutes);
app.use("/api/v1/notes", noteRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.use(errorHandler);

export default app;
