import { Router } from "express";

import {
  startSession,
  stopSession,
  getSession,
} from "../controllers/studySession.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.post("/start", startSession);

router.post("/stop", stopSession);

router.get("/current", getSession);

export default router;
