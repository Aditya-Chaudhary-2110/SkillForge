import { Router } from "express";

import {
  completeTopic,
  uncompleteTopic,
  getProgress,
  saveLastVisited,
} from "../controllers/userProgress.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// All routes require authentication
router.use(verifyJWT);

router.post("/complete", completeTopic);

router.post("/uncomplete", uncompleteTopic);

router.post("/last-visited", saveLastVisited);

router.get("/", getProgress);

export default router;
