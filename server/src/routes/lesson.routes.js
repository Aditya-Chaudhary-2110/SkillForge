import { Router } from "express";

import { getLesson } from "../controllers/lesson.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.get("/:skillSlug/:moduleSlug/:topicSlug", getLesson);

export default router;
