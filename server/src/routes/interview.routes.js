import { Router } from "express";

import { getInterview } from "../controllers/interview.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.get("/:skillSlug/:moduleSlug/:topicSlug", getInterview);

export default router;
