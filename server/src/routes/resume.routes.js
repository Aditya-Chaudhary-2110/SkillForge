import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

import {
  uploadResume,
  analyzeUploadedResume,
  reanalyzeResume,
  getUploadedResume,
  getResumeAnalysis,
  deleteUploadedResume,
} from "../controllers/resume.controller.js";

const router = Router();

router.post("/upload", verifyJWT, upload.single("resume"), uploadResume);

router.post("/analyze", verifyJWT, analyzeUploadedResume);

router.patch("/reanalyze", verifyJWT, reanalyzeResume);

router.get("/", verifyJWT, getUploadedResume);

router.get("/analysis", verifyJWT, getResumeAnalysis);

router.delete("/", verifyJWT, deleteUploadedResume);

export default router;
