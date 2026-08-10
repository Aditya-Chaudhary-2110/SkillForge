import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import { analyzeUploadedResume } from "../controllers/resumeAnalysis.controller.js";

const router = Router();

router.post("/analyze", verifyJWT, analyzeUploadedResume);

export default router;
